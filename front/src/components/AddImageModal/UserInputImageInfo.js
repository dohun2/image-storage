import styled from 'styled-components';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { selectedDayState } from '../../recoil/atoms';
import useInput from '../../hooks/useInput';
import Color from '../../utils/color';

const UserInputImageInfo = () => {
  const [title, onChangeTitle] = useInput('');
  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState);
  const getDateFormat = useCallback((date) => {
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }, []);

  const crrDay = getDateFormat(selectedDay);

  const onChangeDay = useCallback(
    (e) => {
      setSelectedDay(new Date(e.target.value));
    },
    [setSelectedDay],
  );

  return (
    <Container>
      <DatePicker type="date" value={crrDay} onChange={onChangeDay} />
      <TextInput type="text" placeholder="사진 이름" value={title} onChange={onChangeTitle} />
    </Container>
  );
};

export default UserInputImageInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DatePicker = styled.input`
  background-color: ${Color[200]};
  border: none;
  padding: 1rem;
  border-radius: 0.3rem;
  margin: 0.5rem;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${Color[900]};
`;

const TextInput = styled(DatePicker)`
  padding: 0.5rem;
`;
