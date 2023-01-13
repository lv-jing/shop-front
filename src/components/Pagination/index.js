import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import { Link } from 'react-router-dom';

function Item({ className, onClick, to, children }) {
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
}

export default class Pagination extends Component {
  static defaultProps = {
    totalPage: 1,
    defaultCurrentPage: 1,
    loading: false,
    prevPageLink: null,
    nextPageLink: null
  };
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.defaultCurrentPage
    };

    this.handlePrevOrNextPage = this.handlePrevOrNextPage.bind(this);
    this.handleCurrentPageNumChange =
      this.handleCurrentPageNumChange.bind(this);
  }
  handleCurrentPageNumChange(e) {
    if (this.props.loading) {
      return false;
    }
    const { totalPage } = this.props;
    const val = e.target.value;
    if (val === '') {
      this.setState({ currentPage: val });
    } else {
      let tmp = parseInt(val);
      if (isNaN(tmp)) {
        tmp = 1;
      }
      if (tmp > totalPage) {
        tmp = totalPage;
      } else if (tmp < 1) {
        tmp = 1;
      }
      if (tmp !== this.state.currentPage) {
        this.setState({ currentPage: tmp }, () => {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.hanldePageNumChange();
          }, 500);
        });
      }
    }
  }
  hanldePageNumChange() {
    this.props.onPageNumChange({
      currentPage: this.state.currentPage
    });
  }
  handlePrevOrNextPage(type) {
    if (this.props.loading) {
      return false;
    }
    const { currentPage } = this.state;
    const { totalPage } = this.props;
    const parsedCurrentPage = isNaN(parseInt(currentPage))
      ? 1
      : parseInt(currentPage);
    let res;
    if (type === 'prev') {
      if (parsedCurrentPage <= 1) {
        return;
      }
      res = parsedCurrentPage - 1;
    } else {
      if (parsedCurrentPage >= totalPage) {
        return;
      }
      res = parsedCurrentPage + 1;
    }
    this.setState({ currentPage: res }, () => this.hanldePageNumChange());
  }
  render() {
    const { currentPage } = this.state;
    const { totalPage } = this.props;
    return (
      <nav className="rc-pagination">
        <div className="d-flex justify-content-between align-items-center">
          {currentPage <= 1 || this.props.loading ? (
            <div
              disabled
              className="rc-btn rc-pagination__direction rc-pagination__direction--prev rc-icon rc-left--xs rc-iconography"
              aria-label="Previous step"
            />
          ) : (
            <>
              <Item
                className="rc-btn rc-pagination__direction rc-pagination__direction--prev rc-icon rc-left--xs rc-iconography"
                ariaLabel="Previous step"
                onClick={this.handlePrevOrNextPage.bind(this, 'prev')}
                to={this.props.prevPageLink}
              />
            </>
          )}
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="rc-pagination__step rc-pagination__step--current"
              value={currentPage}
              aria-label="Current step"
              onChange={this.handleCurrentPageNumChange}
            />
            <div className="rc-pagination__step rc-pagination__step--of">
              <FormattedMessage id="of" /> <span>{totalPage}</span>
            </div>
          </div>
          {currentPage >= totalPage || this.props.loading ? (
            <span
              disabled
              className="rc-btn rc-pagination__direction rc-pagination__direction--prev rc-icon rc-right--xs rc-iconography"
            />
          ) : (
            <>
              <Item
                className="rc-btn rc-pagination__direction rc-pagination__direction--prev rc-icon rc-right--xs rc-iconography"
                onClick={this.handlePrevOrNextPage.bind(this, 'next')}
                to={this.props.nextPageLink}
              />
            </>
          )}
        </div>
      </nav>
    );
  }
}
