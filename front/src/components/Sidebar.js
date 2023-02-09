import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Color from '../utils/color';
import { BiX } from 'react-icons/bi';
import { BsLayoutSidebar } from 'react-icons/bs';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [positionX, setPositionX] = useState('-22%');
  const [transitionTime, setTransitionTime] = useState(0);

  const toggleSidebar = useCallback(() => {
    setShowSidebar((v) => !v);
    setPositionX((v) => (v === 0 ? '-22%' : 0));
    setTransitionTime((v) => (v === 0 ? '0.4s' : 0));
  }, []);
  return (
    <Container left={positionX} transitionTime={transitionTime}>
      <CloseButton
        onClick={() => {
          toggleSidebar();
        }}
      >
        <BiX size={'1.5rem'} color={Color.backgroundColor} />
      </CloseButton>
      {showSidebar && (
        <OpenButton
          onClick={() => {
            toggleSidebar();
          }}
        >
          <BsLayoutSidebar size={'1.5rem'} />
        </OpenButton>
      )}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: ${Color[200]};
  border-right: 5px solid ${Color[200]};
  position: fixed;
  width: 20%;
  height: 100%;
  top: 2.5rem;
  bottom: 0;
  left: ${(props) => props.left};
  transition: ${(props) => props.transitionTime} ease;
  z-index: 99;
`;

const CloseButton = styled.button`
  background-color: transparent;
  position: absolute;
  left: 75%;
  top: 1%;
  overflow: hidden;
  border: none;
  cursor: pointer;
`;

const OpenButton = styled.button`
  position: fixed;
  top: 2.5rem;
  left: 0;
  border: none;
  background-color: ${Color.backgroundColor};
`;
