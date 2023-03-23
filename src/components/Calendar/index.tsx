import styled from 'styled-components/native';
import {CalendarProvider} from './CalendarContext';
import Head from './Head';
import Month from './Month';

export default function Calerdar() {
  return (
    <CalendarProvider>
      <Wrapper>
        <Head />
        <Month />
      </Wrapper>
    </CalendarProvider>
  );
}

const Wrapper = styled.View`
  width: auto;
  height: auto;
  padding: 12px;
`;
