import { useEffect } from 'react';
import Color from '../utils/color';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { selectedDayState } from '../recoil/atoms';
import { BiImageAdd, BiX } from 'react-icons/bi';

const AddImageModal = ({ toggleAddImageModal }) => {
  const selectedDay = useRecoilValue(selectedDayState);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      overflow-y: scroll;`;
    return () => {
      document.body.style.cssText = '';
    };
  }, []);

  return (
    <Container>
      <ModalbackGround onClick={toggleAddImageModal} />
      <BiX onClick={toggleAddImageModal} className="close-icon" />
      <ModalBox>
        <h5>새로운 사진 등록하기</h5>
        <p>등록일: {selectedDay.toLocaleDateString()}</p>
        <div>
          <BiImageAdd size={'6rem'} color={Color[700]} />
          <p>사진을 여기에 끌어다 놓으세요</p>
          <button>컴퓨터에서 선택</button>
        </div>
      </ModalBox>
    </Container>
  );
};

export default AddImageModal;

const Container = styled.div`
  .close-icon {
    font-size: 2rem;
    color: ${Color.backgroundColor};
    z-index: 100;
    position: absolute;
    top: 5%;
    right: 10%;
    cursor: pointer;
  }
`;

const ModalbackGround = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  background-color: ${Color[900]};
`;

const ModalBox = styled.div`
  background-color: ${Color[900]};
  width: 65%;
  height: 70vh;
  z-index: 100;
  position: absolute;
  top: 7%;
  left: 17.5%;
  opacity: 1;
  background-color: ${Color.backgroundColor};
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  & > h5 {
    color: ${Color[800]};
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0.6rem;
  }
  & p {
    color: ${Color[800]};
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0.3rem;
  }
  & > div {
    color: ${Color[900]};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & button {
    font-size: 0.78rem;
    margin-top: 0.5rem;
    padding: 0.3rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    background-color: ${Color[600]};
    color: ${Color.backgroundColor};
    :hover {
      background-color: ${Color[300]};
    }
  }
`;
