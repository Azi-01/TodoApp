import styled from 'styled-components';
import AppContainer from './AppContainer';

const Main = styled.div`
  background: ${(props) => (props.dark) ? "url('../src/images/bg-desktop-dark.jpg')":"url('../src/images/bg-desktop-light.jpg')"} no-repeat top center;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 375px){
    background: ${(props) => (props.dark) ? "url('../src/images/bg-mobile-dark.jpg')":"url('../src/images/bg-mobile-light.jpg')"} no-repeat top center;
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
