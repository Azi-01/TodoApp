import styled from 'styled-components';

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
            {props.dark ? <img src="/src/images/icon-moon.svg" alt="dark mode" /> : <img src="/src/images/icon-sun.svg" alt="light mode" />}
        </div>
    </StyledHeader>
  )
}

export default Header