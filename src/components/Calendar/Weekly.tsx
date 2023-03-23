import moment from 'moment';
import styled from 'styled-components/native';
import {useCurrentViewDate} from './CalendarContext';
import Week from './Week';

export default function Weekly() {
  const currentViewDate = moment(useCurrentViewDate());

  const startDate = currentViewDate.startOf('week');

  return (
    <Wrapper>
      <Week
        isMonthlyMode={false}
        startDate={startDate.toDate()}
        currentMonth={currentViewDate.month()}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
`;
