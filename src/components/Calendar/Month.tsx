import moment from 'moment';
import styled from 'styled-components/native';
import {useCurrentMonth} from './CalendarContext';
import Week from './Week';

export default function Month() {
  const current = moment(useCurrentMonth());

  const prevMonthLastSunday = moment()
    .year(current.year())
    .month(current.month())
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
    <Wrapper>
      {weeks.map(
        startDate =>
          startDate.getMonth() > current.month() || (
            <Week currentMonth={current.month()} startDate={startDate} />
          ),
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: auto;
  height: auto;
`;
