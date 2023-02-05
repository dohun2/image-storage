import { useCallback, useState } from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const year = new Date().getFullYear();
  const [crrYear, setCrrYear] = useState(year);

  const onClickLeftBtn = useCallback(() => {
    setCrrYear((e) => e - 1);
  }, []);

  const onClickRightBtn = useCallback(() => {
    setCrrYear((e) => e + 1);
  }, []);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Sidebar></Sidebar>
      <TimeBar>
        <button onClick={onClickLeftBtn}>&lt;</button>
        <h1>{crrYear}</h1>
        <button onClick={onClickRightBtn}>&gt;</button>
      </TimeBar>
      <div>달력</div>
    </div>
  );
};

export default Home;

const TimeBar = styled.div`
  display: flex;
  justify-content: center;
  & > h1 {
    font-size: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  & > button {
    border: none;
    background-color: white;
    font-size: 4rem;
    cursor: pointer;
  }
`;
