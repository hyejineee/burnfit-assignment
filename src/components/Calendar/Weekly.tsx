import moment from 'moment';
import {useCurrentViewDate} from './CalendarContext';
import Week from './Week';

export default function Weekly() {
  const currentViewDate = moment(useCurrentViewDate());

  const startDate = currentViewDate.startOf('week');

  return (
    <Week
      isMonthlyMode={false}
      startDate={startDate.toDate()}
      currentMonth={currentViewDate.month()}
    />
  );
}
