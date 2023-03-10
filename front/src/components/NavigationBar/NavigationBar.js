import styled from 'styled-components';
import Color from '../../utils/color';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { showProfileModalState } from '../../recoil/atoms';
import ProfileModal from './ProfileModal';

const NavigationBar = () => {
  const [showProfileModal, setShowProfileModal] = useRecoilState(showProfileModalState);

  const toggleProfileModal = () => {
    setShowProfileModal((e) => !e);
  };

  return (
    <Container>
      <TitleLink to="/">Image Storage</TitleLink>
      <Profile onClick={toggleProfileModal}>{showProfileModal && <ProfileModal />}</Profile>
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${Color[400]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  max-height: 2.5rem;
  margin-bottom: 1rem;
`;

const Profile = styled.div`
  margin: 1.5rem;
  background-color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;

const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1.5rem;
  font-family: 'Yeon Sung', cursive;
  font-weight: 600;
  cursor: pointer;
`;
