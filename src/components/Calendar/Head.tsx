import moment from 'moment';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {useCurrentMonth, useSetCurrentMonth} from './CalendarContext';

export default function Head() {
  const current = useCurrentMonth();
  const setCurrent = useSetCurrentMonth();

  const handlePressPrevMonth = () => {
    setCurrent(moment(current).subtract(1, 'month').toDate());
  };

  const handlePressNextMonth = () => {
    setCurrent(moment(current).add(1, 'month').toDate());
  };

  return (
    <Wrapper>
      <ControlWrapper>
        <ArrowIconButton onPress={handlePressPrevMonth}>
          <Icon name="arrow-back-circle-outline" size={24} color="#0080ff" />
        </ArrowIconButton>

        <Text style={textStyles.currentMonth}>{`${moment(current).format(
          'MMMM',
        )}, ${moment(current).year()}`}</Text>

        <ArrowIconButton onPress={handlePressNextMonth}>
          <Icon name="arrow-forward-circle-outline" size={24} color="#0080ff" />
        </ArrowIconButton>
      </ControlWrapper>

      <DayOfWeekWrapper>
        <Text style={textStyles.sunday}>{'Sun'}</Text>
        <Text>{'Mon'}</Text>
        <Text>{'Tue'}</Text>
        <Text>{'Wed'}</Text>
        <Text>{'Thu'}</Text>
        <Text>{'Fri'}</Text>
        <Text style={textStyles.saturday}>{'Sat'}</Text>
      </DayOfWeekWrapper>
    </Wrapper>
  );
}

const textStyles = StyleSheet.create({
  sunday: {color: 'red'},
  saturday: {color: '#0080ff'},
  currentMonth: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Wrapper = styled.View`
  width: 100%;
  height: auto;
`;

const ControlWrapper = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArrowIconButton = styled.Pressable`
  padding: 8px;
`;

const DayOfWeekWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
