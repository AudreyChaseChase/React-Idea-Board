
/**
 * Ducks file structure
*/
/* Actions */
const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const initialState = {
  notification: null,
};

/* Reducer */
export default function notification(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.notification,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: null,
      };
    default:
      return state;
  }
}

/* Action Creators */
export function showNotification(message) {
  return dispatch => {
    dispatch({ type: SHOW_NOTIFICATION, notification: message });

    setTimeout(() => {
      dispatch({ type: HIDE_NOTIFICATION });
    }, 1500);
  };
}