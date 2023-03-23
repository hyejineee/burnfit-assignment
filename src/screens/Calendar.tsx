import moment from 'moment';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import Day from '../components/Calendar/Day';

export default function CalendarScreen() {
  return (
    <Wrapper>
      <Text>Calendar</Text>
      <Day date={moment().toDate()} />
      <Text>Calendar</Text>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;
