import { useCallback } from 'react';
import styled from 'styled-components';
import Color from '../utils/color';
import getDateFormat from '../utils/getDateFormat';
import { useRecoilState } from 'recoil';
import { selectedDayState } from '../recoil/atoms';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router';

const Detail = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState);
  const crrDay = getDateFormat(selectedDay, 'input');

  const onChangeSelectedDay = useCallback(
    (e) => {
      setSelectedDay(new Date(e.target.value));
      const prams = getDateFormat(new Date(e.target.value));
      navigate(`/detail/${prams}`);
    },
    [setSelectedDay, navigate],
  );

  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <TimeBar>
        <input type="date" value={crrDay} onChange={onChangeSelectedDay} />
      </TimeBar>
    </div>
  );
};

export default Detail;

const TimeBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  text-align: center;
  & > input {
    width: 50%;
    border: none;
    background-color: ${Color[200]};
    padding: 1rem;
    border-radius: 0.3rem;
    margin: 0.5rem;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: ${Color[900]};
  }
`;
