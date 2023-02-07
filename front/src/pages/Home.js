import { useCallback, useState } from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar/Calendar';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Color from '../utils/color';

const Home = () => {
  const year = new Date().getFullYear();
  const [crrYear, setCrrYear] = useState(year);
  const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [selectedDay, setSelectedDay] = useState(new Date());

  const onClickLeftBtn = useCallback(() => {
    setCrrYear((e) => e - 1);
  }, []);

  const onClickRightBtn = useCallback(() => {
    setCrrYear((e) => e + 1);
  }, []);

  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <TimeBar>
        <button onClick={onClickLeftBtn}>
          <MdOutlineArrowBackIos size={'3rem'} color={Color[400]} />
        </button>
        <h1>{crrYear}</h1>
        <button onClick={onClickRightBtn}>
          <MdOutlineArrowForwardIos size={'3rem'} color={Color[400]} />
        </button>
      </TimeBar>
      <CalendarContainer>
        {month.map((v, i) => (
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            key={i}
            curMonth={new Date(new Date(new Date().setFullYear(crrYear)).setMonth(v))}
          />
        ))}
      </CalendarContainer>
    </div>
  );
};

export default Home;

const TimeBar = styled.div`
  display: flex;
  justify-content: center;
  & > h1 {
    margin-top: 4rem;
    font-size: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
    color: ${Color[700]};
  }
  & > button {
    margin-top: 2rem;
    border: none;
    background-color: white;
    font-size: 4rem;
    cursor: pointer;
  }
`;
const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
