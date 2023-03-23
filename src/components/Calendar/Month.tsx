import moment from 'moment';
import styled from 'styled-components/native';
import Week from './Week';

type Props = {
  currentMonth: number;
  currentYear: number;
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
    <Wrapper>
      {weeks.map(
        startDate =>
          moment()
            .year(currentYear)
            .month(currentMonth)
            .isBefore(moment(startDate), 'month') || (
            <Week currentMonth={currentMonth} startDate={startDate} />
          ),
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: auto;
  height: auto;
`;
