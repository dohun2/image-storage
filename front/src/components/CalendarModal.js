import { useCallback } from 'react';
import styled from 'styled-components';
import Color from '../utils/color';
import { useSetRecoilState } from 'recoil';
import { showAddImageModalState } from '../recoil/atoms';

const CalendarModal = () => {
  const setShowAddImageModal = useSetRecoilState(showAddImageModalState);

  const toggleAddImageModal = useCallback(
    (e) => {
      e.stopPropagation();
      setShowAddImageModal((e) => !e);
    },
    [setShowAddImageModal],
  );

  return (
    <ModalBox>
      <ModalItem>상세페이지</ModalItem>
      <ModalItem onClick={toggleAddImageModal}>등록</ModalItem>
      <ModalItem>닫기</ModalItem>
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
  color: black;
  :hover {
    background-color: ${Color[300]};
  }
`;
