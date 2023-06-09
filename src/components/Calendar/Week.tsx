import moment from 'moment';
import styled from 'styled-components/native';
import {useSelectDate, useSelectedDate} from './CalendarContext';
import Day from './Day';

type Props = {
  currentMonth: number;
  startDate: Date;
  isMonthlyMode: boolean;
};
export default function Week({
  isMonthlyMode = true,
  currentMonth,
  startDate,
}: Props) {
  const selected = useSelectedDate();
  const selectDate = useSelectDate();

  const days = Array(7)
    .fill('')
    .map((e, i) => moment(startDate).add(i, 'd').toDate());

  const handlePressDay = (date: Date) => () => {
    selectDate(date);
  };

  return (
    <Wrapper>
      {days.map(date => (
        <PressableWrapper onPress={handlePressDay(date)}>
          <Day
            date={date}
            disable={isMonthlyMode ? date.getMonth() !== currentMonth : false}
            selected={moment(date).isSame(moment(selected), 'day')}
          />
        </PressableWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  gap: 16;
`;

const PressableWrapper = styled.Pressable`
  flex: 1;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  margin: 3px;
`;
