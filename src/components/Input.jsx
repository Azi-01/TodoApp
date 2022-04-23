import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    padding: 1.2rem 1.5rem;
    padding-left: 0;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 2rem 0;
    background-color: ${props=> props.dark ? "hsl(235, 24%, 19%)" : "white"};
    color:  ${props=> props.dark ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)"};
    font-weight: 400;
    font-size: 18px;
    text-indent: 3.5rem;
`

const StyledDiv = styled.div`
  form{
   display: flex;
   align-items: center;
   position: relative;
    
    .outerdiv{
      position: absolute;
      background-color: transparent;
      padding: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

      
      .circle{
        border-radius: 50%;
        border: 1px solid ${props => props.dark ? "hsl(234, 11%, 52%)": "hsl(233, 11%, 84%)"};
        width: 20px;
        height: 20px;
      }
    }
    
  }
`

function Input(props) {
  return (
    <StyledDiv dark={props.dark}>
        <form onSubmit={(e)=>props.handleSubmit(e)}>
          <div className="outerdiv">
              <div className="circle"></div>
          </div>
            <StyledInput dark={props.dark} type="text" onChange={(e)=>props.handleChange(e)}/>
        </form>
    </StyledDiv>
  )
}

export default Input