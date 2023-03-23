import moment from 'moment';
import styled from 'styled-components/native';

type Props = {
  date: Date;
  disable?: boolean;
  selected?: boolean;
};

export default function Day({date, disable = false, selected = false}: Props) {
  const day = moment(date).date();
  const isToday = moment().isSame(moment(date));

  return (
    <Wrapper selected={selected}>
      {isToday && <TodayDot />}
      <Date disable={disable}>{day}</Date>
    </Wrapper>
  );
}

type StyleProps = {
  selected?: boolean;
  disable?: boolean;
};

const Wrapper = styled.View<StyleProps>`
  width: 100%;
  align-items: center;
  justify-content: center;

  border-radius: ${props => (props.selected ? 1000 : 0)};
  border-width: ${props => (props.selected ? 1 : 0)};
  border-color: ${props => (props.selected ? 'red' : '')};
`;

const Date = styled.Text<StyleProps>`
  color: ${props => (props.disable ? '#D3D3D3' : 'black')};
`;

const TodayDot = styled.View`
  width: 5;
  height: 5;
  border-radius: 2.5;
  margin-top: 5;
  margin-bottom: 3;
  background-color: gray;
`;
