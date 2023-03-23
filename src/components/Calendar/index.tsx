import moment from 'moment';
import styled from 'styled-components/native';
import {CalendarProvider, useCurrentMonth} from './CalendarContext';
import Head from './Head';
import Month from './Month';

function Calerdar() {
  const current = moment(useCurrentMonth());
  return (
    <Wrapper>
      <Head />
      <Month currentYear={current.year()} currentMonth={current.month()} />
    </Wrapper>
  );
}

const ProviderWrapper = () => {
  return (
    <CalendarProvider>
      <Calerdar />
    </CalendarProvider>
  );
};
export default ProviderWrapper;

const Wrapper = styled.View`
  width: auto;
  height: auto;
  padding: 12px;
`;
