import moment from 'moment';
import {View} from 'react-native';
import Week from './Week';

type Props = {
  currentYear: number;
  currentMonth: number;
};
export default function Month({currentYear, currentMonth}: Props) {
  const prevMonthLastSunday = moment()
    .year(currentYear)
    .month(currentMonth)
    .subtract(1, 'months')
    .endOf('month')
    .day('Sunday');

  const weeks = Array(6)
    .fill('')
    .map((_, i) =>
      moment(prevMonthLastSunday)
        .add(7 * i, 'd')
        .toDate(),
    );

  return (
    <View>
      {weeks.map(
        startDate =>
          startDate.getMonth() > currentMonth || (
            <Week currentMonth={currentMonth} startDate={startDate} />
          ),
      )}
    </View>
  );
}
