import moment from 'moment';
import styled from 'styled-components/native';
import {useCurrentViewDate} from './CalendarContext';
import Week from './Week';

export default function Monthly() {
  const currentViewDate = moment(useCurrentViewDate());

  const prevMonthLastSunday = moment()
    .year(currentViewDate.year())
    .month(currentViewDate.month())
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
          currentViewDate.isBefore(moment(startDate), 'month') || (
            <Week
              isMonthlyMode={true}
              currentMonth={currentViewDate.month()}
              startDate={startDate}
            />
          ),
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
`;
