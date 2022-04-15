import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    padding: 1.2rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 2rem 0;
    background-color: ${props=> props.dark ? "hsl(235, 24%, 19%)" : "white"};
    color:  ${props=> props.dark ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)"};
    font-weight: 400;
    font-size: 18px;
`

function Input(props) {
  return (
    <div>
        <form onSubmit={(e)=>props.handleSubmit(e)}>
            <StyledInput dark={props.dark} type="text" onChange={(e)=>props.handleChange(e)}/>
        </form>
    </div>
  )
}

export default Input