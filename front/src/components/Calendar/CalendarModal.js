import { useCallback } from 'react';
import styled from 'styled-components';
import Color from '../../utils/color';
import getDateFormat from '../../utils/getDateFormat';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { showAddImageModalState, selectedDayState, showCalendarModalState } from '../../recoil/atoms';
import { useNavigate } from 'react-router';

const CalendarModal = () => {
  const navigate = useNavigate();
  const setShowAddImageModal = useSetRecoilState(showAddImageModalState);
  const setShowCalendarModal = useSetRecoilState(showCalendarModalState);
  const selectedDay = useRecoilValue(selectedDayState);

  const toggleAddImageModal = useCallback(
    (e) => {
      e.stopPropagation();
      setShowAddImageModal((e) => !e);
      setShowCalendarModal((e) => !e);
    },
    [setShowAddImageModal, setShowCalendarModal],
  );

  const goDetailPage = useCallback(
    (e) => {
      e.stopPropagation();
      navigate(`/detail/${getDateFormat(selectedDay)}`);
      setShowCalendarModal((e) => !e);
    },
    [navigate, selectedDay, setShowCalendarModal],
  );

  return (
    <ModalBox>
      <ModalItem onClick={goDetailPage}>상세페이지</ModalItem>
      <ModalItem onClick={toggleAddImageModal}>등록</ModalItem>
    </ModalBox>
  );
};

export default CalendarModal;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: 2.3rem;
  top: -2rem;
  width: 5rem;
  height: 4.1rem;
  z-index: 100;
`;

const ModalItem = styled.div`
  font-size: 0.7rem;
  width: 100%;
  border: 1px solid ${Color[200]};
  background-color: ${Color[100]};
  color: ${Color[900]};
  :hover {
    background-color: ${Color[300]};
  }
`;
