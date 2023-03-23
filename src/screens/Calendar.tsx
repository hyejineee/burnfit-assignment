import styled from 'styled-components/native';
import Calerdar from '../components/Calendar';

export default function CalendarScreen() {
  return (
    <Wrapper>
      <Calerdar />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;
