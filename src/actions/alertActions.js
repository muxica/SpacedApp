import { DISPLAY_ALERT, HIDE_ALERT } from 'types';

export function displayAlert(message, autoHideDuration) {
  return {
    type: DISPLAY_ALERT,
    message
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}
