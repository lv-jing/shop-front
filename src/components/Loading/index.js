import React from 'react';
import cn from 'classnames';

class Loading extends React.Component {
  static defaultProps = {
    positionAbsolute: false,
    bgColor: 'rgba(0,0,0,.25)',
    customCls: '',
    customStyle: {},
    opacity: 0.5,
    preloadClassName: ''
  };
  render() {
    const {
      positionFixed,
      positionAbsolute,
      bgColor,
      customStyle,
      customCls,
      opacity,
      preloadClassName
    } = this.props;
    return (
      <div
        className={`veil ${positionAbsolute ? 'absolute' : ''} ${customCls}`}
        style={{
          position: positionFixed ? 'fixed' : '',
          ...customStyle
        }}
      >
        <div
          className={`underlay ${positionAbsolute ? 'absolute' : ''}`}
          style={{ backgroundColor: bgColor, opacity }}
        />

        <div
          className="rcSpinner rc-loader-infinite spinner"
          data-js-progress=""
          style={{ width: '96px', height: '96px' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190.7 104"
            className="rc-loader__logo"
            style={{
              position: positionFixed ? 'fixed' : ''
            }}
            data-js-import-interactive-svg="null"
            svg-animate-processed="true"
          >
            <path
              d="M38.3 93.9c-3.1 0-5.6-2.4-5.6-5.5 0-1.8.8-3.5 2.3-4.5 14.7-11 37.2-17.6 60.2-17.6 22.9 0 45.4 6.6 60.1 17.6 2.4 1.8 2.9 5.3 1.1 7.8-1.8 2.4-5.3 2.9-7.8 1.1-9.9-7.4-29.2-15.4-53.5-15.4-24.4 0-43.7 7.9-53.6 15.4-.8.7-2 1.1-3.2 1.1zm5.1 9.4c.9 0 1.7-.3 2.4-.9 11.2-9.2 30.2-15 49.4-15 19.4 0 37.9 5.6 49.3 15 1.6 1.3 4 1.1 5.3-.5 1.3-1.6 1.1-4-.5-5.3-12.7-10.5-33-16.7-54.1-16.7S53.7 86.2 41 96.6c-1.6 1.3-1.9 3.7-.5 5.3.7.9 1.8 1.4 2.9 1.4zM13.7 23.5C6.7 23.5 1 29.2 1 36.2c0 7 5.7 12.7 12.7 12.7h.1c7 0 12.7-5.8 12.6-12.8 0-2.2-.6-4.4-1.7-6.3-2.3-3.9-6.5-6.3-11-6.3zm81.5 9.8c-7 0-12.7 5.7-12.7 12.7s5.7 12.7 12.7 12.7c7 0 12.7-5.7 12.7-12.7 0-7-5.7-12.7-12.7-12.7zm0-31.8c-7 0-12.7 5.7-12.7 12.7s5.7 12.7 12.7 12.7 12.7-5.7 12.7-12.7c0-7-5.7-12.7-12.7-12.7zM61.4 37.8c-1.1 0-2.3.1-3.4.4-6.8 1.8-10.8 8.7-9 15.5 1.5 5.6 6.6 9.5 12.4 9.5h.3c1.1 0 2.1-.2 3.1-.5 6.8-1.8 10.8-8.7 9.1-15.5-1.6-5.6-6.7-9.5-12.5-9.4zM29.9 50.9c-7 0-12.7 5.7-12.7 12.7 0 2.3.6 4.5 1.8 6.5 2.3 3.8 6.4 6.2 10.9 6.2h.1c2.3 0 4.5-.6 6.5-1.8 6-3.6 8-11.4 4.5-17.4-2.5-3.8-6.6-6.1-11.1-6.2zm102.4-12.7c-6.8-1.9-13.8 2.1-15.6 8.9s2.1 13.8 8.9 15.6c6.8 1.9 13.8-2.1 15.6-8.9 1.9-6.7-2.1-13.7-8.8-15.6h-.1zm8.4-30.7c-6.8-1.8-13.8 2.1-15.6 8.9s2.1 13.8 8.9 15.6c6.8 1.8 13.8-2.1 15.6-8.9 1.9-6.7-2.1-13.7-8.9-15.6zm26.2 45.2c-6-3.6-13.8-1.6-17.4 4.4s-1.6 13.8 4.4 17.4 13.8 1.6 17.4-4.4c1.7-2.9 2.2-6.4 1.4-9.6-.8-3.3-2.9-6.1-5.8-7.8zm22-19.6c-1.4-5.6-6.5-9.6-12.3-9.6-4.5 0-8.7 2.4-10.9 6.2-3.6 6.1-1.6 13.8 4.5 17.4 1.9 1.1 4.2 1.8 6.4 1.8 4.5 0 8.7-2.4 11-6.2 1.7-2.9 2.2-6.4 1.3-9.6zM53 32.5c7 0 12.7-5.7 12.7-12.7S60 7.1 53 7.1c-1.1 0-2.3.1-3.4.4-6.8 1.8-10.8 8.7-9.1 15.5 1.5 5.6 6.6 9.5 12.5 9.5z"
              fill="#e2001a"
            />
          </svg>
          <div className="rc-loader__spinner" />
          <div className="rc-loader__background" />
        </div>
        <div
          className={cn('rc-card rc-list rc-icon rc-img', preloadClassName)}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}

export default Loading;
