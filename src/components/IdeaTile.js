import React from 'react';
import PropTypes from 'prop-types';
import './IdeaTile.scss';
import IdeaDescriptionArea from './IdeaDescriptionArea';
import 'font-awesome/css/font-awesome.min.css';

export default class IdeaTile extends React.Component {
  static propTypes = {
    idea: PropTypes.object.isRequired,
    onBlur: PropTypes.func,
    onDelete: PropTypes.func,
  }

  componentDidMount() {
    if (this.titleField.value === '') {
      this.titleField.focus();
    }
  }

  handleBlur({ body, title }) {
    this.props.onBlur({ title, body });
  }

  render() {
    const { idea: { createdDate, body, title }, onDelete } = this.props;
    const dataString = new Date(createdDate).toString()
    const regex = / GMT.*/g;
    const formattedDate = dataString.replace(regex, "");
    return (
      <div className="idea-tile">
        <button className="idea-tile__delete-btn" onClick={onDelete}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <textarea
          className="idea-tile__title"
          defaultValue={title}
          ref={node => this.titleField = node}
          placeholder="Add title..."
          onBlur={() => this.handleBlur({ body, title: this.titleField.value })}
          rows="2"
        />
        <IdeaDescriptionArea
          textAreaProps={{
            className: 'idea-tile__description',
            defaultValue: body,
            placeholder: 'Add description...',
            rows: 4
          }}
          onBlur={(value) => this.handleBlur({ title, body: value })}
          maxLength={140}
        />
        <div className="idea-tile__date">{formattedDate}</div>
      </div>
    );
  }
}