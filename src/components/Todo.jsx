import styled from "styled-components"

const StyledTodo = styled.div`
    list-style: none;
    border-radius: 5px;
    padding: 1.5rem 1.5rem;
    border-bottom: 1px solid ${props=> props.dark ? "hsl(233, 14%, 35%)" : "white"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props=> props.dark ? "hsl(235, 24%, 19%)" : "white"};

    .image-wrapper{
        display: none;
        margin-bottom: -1px;
        width: 5%;
        
        img{
            width: 15px;
        }

        &:hover{
            cursor: pointer;
        }
    }

    div{

        display: flex;
        align-items: center;
        width: 80%;
        overflow-wrap: break-word;
        flex-wrap: wrap;
        word-wrap: break-word;
        -ms-word-wrap: break-word;
        
        span{
            text-decoration: ${props => props.complete ? "line-through": ""};
            color: ${props => props.dark ? (props.complete ? "hsl(233, 14%, 35%)" : "hsl(234, 39%, 85%)") : (props.complete ? "hsl(233, 11%, 84%)": "hsl(236, 9%, 61%)")};
            overflow-wrap: break-word;
            line-height: 1.5rem;
            word-break: break-all;
        }

        .circle{
        border-radius: 50%;
        border: 1px solid ${props => props.dark ? "hsl(234, 11%, 52%)": "hsl(233, 11%, 84%)"};
        width: 20px;
        height: 20px;
        margin-right: 0.75rem;
        margin-bottom: 0.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.complete ? "linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))": ""};

        &:hover{
            cursor: pointer;
            background: linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            background-color: ${props => props.complete ? "transparent" : (props.dark ? "hsl(235, 24%, 19%)": "white")};
        }

        }
    } 
    

    &:hover .image-wrapper{
        display: unset;
    }
`

function Todo(props) {
  return (
    <StyledTodo
    {...props.provided.draggableProps} 
    {...props.provided.dragHandleProps}
    ref={props.innerref} 
    complete={props.task.complete}
    dark={props.dark}>
    <div>
        <div className="circle" onClick={()=>props.handleCheck(props.id)}>
            <div complete={props.task.complete.toString()}>
                {props.task.complete ? <img src="/src/images/icon-check.svg" alt="completed task check icon"/> : ""}
            </div>
        </div>
        <span>{props.task.task}</span>
    </div>
    
    <div className="image-wrapper" onClick={()=>props.handleDelete(props.id)}>
        <img src="/src/images/icon-cross.svg" alt="delete icon" />
    </div>
    </StyledTodo>
  );
}

export default Todo