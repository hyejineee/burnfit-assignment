import moment from 'moment';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {useCurrentViewDate} from './CalendarContext';

type Props = {
  onPressPrev: () => void;
  onPressNext: () => void;
};
export default function Head({onPressPrev, onPressNext}: Props) {
  const current = moment(useCurrentViewDate());
  const handlePressPrev = () => {
    onPressPrev();
  };

  const handlePressNext = () => {
    onPressNext();
  };

  return (
    <Wrapper>
      <ControlWrapper>
        <ArrowIconButton onPress={handlePressPrev}>
          <Icon name="arrow-back-circle-outline" size={24} color="#0080ff" />
        </ArrowIconButton>

        <Text style={textStyles.currentMonth}>{`${current.format(
          'MMMM',
        )}, ${current.year()}`}</Text>

        <ArrowIconButton onPress={handlePressNext}>
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
