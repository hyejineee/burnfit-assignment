import moment from 'moment';
import styled from 'styled-components/native';

type Props = {
  date: Date;
  disable?: boolean;
  selected?: boolean;
};

export default function Day({date, disable = false, selected = false}: Props) {
  const day = moment(date).date();
  const isToday = moment().isSame(moment(date), 'day');

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
  flex: 1;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  margin: 3px;
  border-radius: ${props => (props.selected ? 1000 : 0)};
  border-width: ${props => (props.selected ? 1 : 0)};
  border-color: ${props => (props.selected ? '#0080ff' : '')};
`;

const Date = styled.Text<StyleProps>`
  color: ${props => (props.disable ? '#D3D3D3' : 'black')};
`;

const TodayDot = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  margin-top: 5px;
  margin-bottom: 3px;
  background-color: gray;
`;
