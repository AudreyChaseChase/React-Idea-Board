import React from 'react';
import { connect } from 'react-redux';
import './Notification.scss';

function Notification({ notification }) {
  if (!notification) return null;
  return (
    <div className="notification">
      {notification}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notification: state.notification.notification,
  };
}

export default connect(mapStateToProps)(Notification);