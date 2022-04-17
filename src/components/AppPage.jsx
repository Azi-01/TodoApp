import styled from 'styled-components';
import AppContainer from './AppContainer';
import imgUrlDark from '../../images/bg-desktop-dark.jpg';
import imgUrlDarkMobile from '../../images/bg-mobile-dark.jpg';
import imgUrlLight from '../../images/bg-desktop-light.jpg';
import imgUrlLightMobile from '../../images/bg-mobile-light.jpg';

const Main = styled.div`
  background: ${(props) => (props.dark) ? `url(${imgUrlDark})`:`url(${imgUrlLight})`} no-repeat top center;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 375px){
    background: ${(props) => (props.dark) ? `url(${imgUrlDarkMobile})`:`url(${imgUrlLightMobile})`} no-repeat top center;
  }  
`;

function AppPage(props) {
  return (
    <Main dark={props.darkMode}>
      <AppContainer dark={props.darkMode} toggleDark={props.handleToggle}/>
    </Main>
  )
}

export default AppPage
