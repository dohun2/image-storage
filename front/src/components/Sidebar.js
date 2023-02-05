import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Color from '../utils/color';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [positionX, setPositionX] = useState(0);

  const toggleSidebar = useCallback(() => {
    setShowSidebar((v) => !v);
    setPositionX((v) => (v === 0 ? '-22%' : 0));
  }, []);
  return (
    <Container left={positionX}>
      <CloseButton
        onClick={() => {
          toggleSidebar();
        }}
      >
        x
      </CloseButton>
      {showSidebar && (
        <OpenButton
          onClick={() => {
            toggleSidebar();
          }}
        />
      )}
      <div>메뉴</div>
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
  transition: 0.3s ease;
  z-index: 99;
`;

const CloseButton = styled.button`
  background-color: ${Color[200]};
  position: absolute;
  left: 80%;
  top: 1%;
  overflow: hidden;
  border: none;
  cursor: pointer;
`;

const OpenButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: red;
  position: fixed;
  top: 2.5rem;
  left: 0;
  border: none;
  background-color: ${Color[200]};
`;
