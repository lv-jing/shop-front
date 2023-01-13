import React from 'react';
class RadioAnswer extends React.Component {
  static defaultProps = {
    updateSaveBtnStatus: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      sickModalVisible: false,
      form: null
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  componentDidMount() {
    const { config } = this.props;
    this.setState(
      { form: (config.list || []).filter((el) => el.selected)[0] || null },
      () => {
        const { form } = this.state;
        this.props.updateSaveBtnStatus(form && form.key);
        this.props.updateFormData(form);
      }
    );
  }
  handleRadioChange(item) {
    this.setState({ form: item }, () => {
      const { form } = this.state;
      this.props.updateSaveBtnStatus(form && form.key);
      this.props.updateFormData(form);
    });
  }
  render() {
    const { form } = this.state;
    const { config } = this.props;
    return (
      <>
        <h4 className="mb-4 red">{config.title}</h4>
        {(config.list || []).map((ele, i) => (
          <div
            key={i}
            className="rc-input rc-margin-y--xs rc-input--full-width ml-2"
          >
            <input
              className="rc-input__radio"
              id={`pro-finder-answer-${i}`}
              type="radio"
              name={`pro-finder-adioAnswer`}
              value={i}
              onChange={this.handleRadioChange.bind(this, ele)}
              // defaultChecked={ele.defaultChecked}
              checked={form && form.key === ele.key}
            />
            <label
              className="rc-input__label--inline"
              htmlFor={`pro-finder-answer-${i}`}
            >
              {ele.label}
            </label>
          </div>
        ))}
      </>
    );
  }
}

export default RadioAnswer;
