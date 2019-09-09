import React from 'react';
import './IdeaDescriptionArea.scss';

export default class IdeaDescriptionArea extends React.Component {
  static defaultProps = {
    onBlur: () => {},
    threshold: 15,
  }

  state = {
    count: 0,
  }

  onChange = () => {
    this.setState({ count: this.textarea.value.length });
  }

  render() {
    const remainingCharCount = this.props.maxLength - this.state.count;
    const showCounter = remainingCharCount < this.props.threshold;
    return (
      <div>
        <textarea
          {...this.props.textAreaProps}
          maxLength={this.props.maxLength}
          onChange={this.onChange}
          ref={node => this.textarea = node}
          onBlur={() => this.props.onBlur(this.textarea.value)}
        />
        {showCounter && (
          <div className="textarea__counter">
            {remainingCharCount} chars remaining
          </div>
        )}
      </div>
    );
  }
}