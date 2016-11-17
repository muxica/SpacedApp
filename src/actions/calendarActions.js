import { browserHistory } from 'react-router';

import { getCalendar } from '../api/calendars';
import { displayAlert } from 'alertActions';

export function startCalendarRetrieval() {
  return (dispatch, getState) => {
    return getCalendar()
      .then((calendar) => {
        dispatch(finishCalendarRetrieval(calendar));
        if (calendar.isNew) {
          dispatch(displayAlert('Created new google calendar "SpacedApp"'));
        }
      }, () => {
        dispatch(failCalendarRetrieval());
      });
  };
}

export function finishCalendarRetrieval(calendar) {
  return {
    type: 'FINISH_CALENDAR_RETRIEVAL',
    calendar
  };
}

export function failCalendarRetrieval(calendar) {
  return {
    type: 'FAIL_CALENDAR_RETRIEVAL',
    calendar
  };
}
