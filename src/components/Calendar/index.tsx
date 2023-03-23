import moment from 'moment';

import styled from 'styled-components/native';
import CalendarAnimation from './CalendarAnimation';
import {
  CalendarProvider,
  useCurrentViewDate,
  useIsMonthlyMode,
  useSetCurrentViewDate,
} from './CalendarContext';
import Head from './Head';
import Monthly from './Monthly';
import Weekly from './Weekly';

function Calerdar() {
  const current = moment(useCurrentViewDate());
  const setCurrent = useSetCurrentViewDate();

  const isMonthlyMode = useIsMonthlyMode();

  const handlePressPrevMonth = () => {
    setCurrent(current.subtract(1, 'month').toDate());
  };

  const handlePressNextMonth = () => {
    setCurrent(current.add(1, 'month').toDate());
  };

  const handlePressPreWeek = () => {
    setCurrent(current.subtract(1, 'weeks').toDate());
  };

  const handlePressNextWeek = () => {
    setCurrent(current.add(1, 'weeks').toDate());
  };

  return (
    <Wrapper>
      <Head
        onPressPrev={isMonthlyMode ? handlePressPrevMonth : handlePressPreWeek}
        onPressNext={isMonthlyMode ? handlePressNextMonth : handlePressNextWeek}
      />

      <CalendarAnimation
        onSwipeLeft={isMonthlyMode ? handlePressNextMonth : handlePressNextWeek}
        onSwipeRight={
          isMonthlyMode ? handlePressPrevMonth : handlePressPreWeek
        }>
        <DatesWrapper>
          <Monthly />
        </DatesWrapper>

        <DatesWrapper>
          <Weekly />
        </DatesWrapper>
      </CalendarAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: auto;
  height: auto;
  align-items: center;
  padding: 12px;
`;

const DatesWrapper = styled.View`
  align-items: center;
  padding-top: 12px;
  width: 100%;
`;

const ProviderWrapper = () => {
  return (
    <CalendarProvider>
      <Calerdar />
    </CalendarProvider>
  );
};
export default ProviderWrapper;
