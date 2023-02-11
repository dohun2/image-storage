import { useCallback } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import Color from '../utils/color';
import { useRecoilState } from 'recoil';
import { selectedYearState, showAddImageModalState } from '../recoil/atoms';

import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';
import AddImageModal from '../components/AddImageModal';

const Home = () => {
  const [crrYear, setCrrYear] = useRecoilState(selectedYearState);
  const [showAddImageModal, setShowAddImageModal] = useRecoilState(showAddImageModalState);

  const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const onClickLeftBtn = useCallback(() => {
    setCrrYear((e) => e - 1);
  }, [setCrrYear]);

  const onClickRightBtn = useCallback(() => {
    setCrrYear((e) => e + 1);
  }, [setCrrYear]);

  const toggleAddImageModal = useCallback(() => {
    setShowAddImageModal((e) => !e);
  }, [setShowAddImageModal]);

  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <TimeBar>
        <button onClick={onClickLeftBtn}>
          <MdOutlineArrowBackIos size={'2rem'} color={Color[400]} />
        </button>
        <h1>{crrYear}</h1>
        <button onClick={onClickRightBtn}>
          <MdOutlineArrowForwardIos size={'2rem'} color={Color[400]} />
        </button>
      </TimeBar>
      <ButtonBar>
        <AddButton onClick={toggleAddImageModal}>
          <span>Add</span>
          <FaPlus size={'1rem'} color={Color[700]} />
        </AddButton>
      </ButtonBar>
      <CalendarContainer>
        {month.map((v, i) => (
          <Calendar key={i} curMonth={new Date(new Date(new Date().setFullYear(crrYear)).setMonth(v))} />
        ))}
      </CalendarContainer>
      {showAddImageModal && <AddImageModal toggleAddImageModal={toggleAddImageModal} />}
    </div>
  );
};

export default Home;

const TimeBar = styled.div`
  display: flex;
  justify-content: center;
  & > h1 {
    margin-top: 3.5rem;
    font-size: 2rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    color: ${Color[700]};
  }
  & > button {
    margin-top: 2rem;
    border: none;
    background-color: ${Color.backgroundColor};
    cursor: pointer;
  }
`;
const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20%;
`;

const AddButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border: none;
  border-radius: 2rem;
  background-color: ${Color.backgroundColor};
  align-items: center;
  color: ${Color[800]};
  cursor: pointer;
  &:hover {
    background-color: ${Color[50]};
  }
  &:active {
    background-color: ${Color[50]};
  }
`;
