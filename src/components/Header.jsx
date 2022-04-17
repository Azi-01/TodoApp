import styled from 'styled-components';
import moonIcon from '../../images/icon-moon.svg';
import sunIcon from '../../images/icon-sun.svg';

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h1{
        font-weight: 700;
        color: white;
        letter-spacing: 0.3rem;
    }

    div{
        max-width: 100%;

        &:hover{
            cursor: pointer;
        }


    }
`

function Header(props) {
  return (
    <StyledHeader>
        <h1>TODO</h1>
        <div onClick={props.toggleDark}>
            {props.dark ? <img src={moonIcon} alt="dark mode" /> : <img src={sunIcon} alt="light mode" />}
        </div>
    </StyledHeader>
  )
}

export default Header