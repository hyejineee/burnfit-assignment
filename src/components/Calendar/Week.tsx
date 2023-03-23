import moment from 'moment';
import styled from 'styled-components/native';
import Day from './Day';

type Props = {
  currentMonth: number;
  startDate: Date;
};
export default function Week({currentMonth, startDate}: Props) {
  const days = Array(7)
    .fill('')
    .map((e, i) => moment(startDate).add(i, 'd').toDate());

  return (
    <Wrapper>
      {days.map(date => (
        <Day date={date} disable={date.getMonth() !== currentMonth} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  gap: 16;
`;
