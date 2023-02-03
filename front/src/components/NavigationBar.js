import styled from 'styled-components';
import Color from '../utils/color';

const NavigationBar = () => {
  return (
    <Container>
      <span>Image Storage</span>
      <div></div>
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  background-color: ${Color[400]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  max-height: 2.5rem;
  & > span {
    margin: 1.5rem;
    font-family: 'Yeon Sung', cursive;
    font-weight: 600;
    cursor: pointer;
  }
  & > div {
    margin: 1.5rem;
    background-color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;
