import Todo from "./Todo";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const StyledList = styled.ul`
    background-color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 1px 1px 10px 6px hsla(233, 14%, 26%, 0.2);
    background-color: ${props=> props.dark ? "hsl(235, 24%, 19%)" : "white"};
    color:  ${props=> props.dark ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)"};
    font-weight: 400;
    font-size: 18px;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 1.5rem 1.5rem;
    font-size: 12px;
    background-color: ${props=> props.dark ? "hsl(235, 24%, 19%)" : "white"};
    box-shadow: 1px 8px 6px 2px hsla(233, 14%, 26%, 0.2);
    
    & *{
            text-decoration: none;
            color: ${props=> props.dark ? "hsl(233, 14%, 35%)" : "hsl(236, 9%, 61%)"};

        &:hover:not(span){
            color: ${props=> props.dark ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)"};
        }
    }
    
    .filters{
        padding: unset;
        font-weight: 700;

        & *:focus{
            color: hsl(220, 98%, 61%);
            
        }

        & *{
            margin-inline: 0.2rem;
        }

        .active{
            color: hsl(220, 98%, 61%);
        }
    @media only screen and (max-width:768px){
        display: none;
    }
    }
`
const StyledDivMobile = styled(StyledDiv)`
    display:flex;
    justify-content: center;
    margin-top: 2rem;
    box-shadow: 1px 5px 6px 2px hsla(233, 14%, 26%, 0.2);
    background-color: ${props=> props.dark ? "hsl(235, 24%, 19%)" : "white"};
    color:  ${props=> props.dark ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)"};

    & > *{
        margin-inline: 1rem;

        &:focus{
            color: hsl(220, 98%, 61%);
        }
    }

    @media only screen and (min-width:768px){
        display: none;
    }
`

function TodoList(props) {

    function handleOnDragEnd(result){
        const temp = [...props.tasks];
        const [reordereditem] = temp.splice(result.source.index, 1);
        temp.splice(result.destination.index, 0, reordereditem);
        props.updateTasks(temp);
    }

  return (
    <DragDropContext onDragEnd={(result)=>handleOnDragEnd(result)}>
    <Droppable droppableId="TodoList">
    {(provided) => (
        <StyledList {...provided.droppableProps} ref={provided.innerRef} dark={props.dark}>
            {props.tasks.map((task,index)=>{
                return (      
                    <Draggable key={index} draggableId={`${index}`} index={index}>
                        {(provided)=>(
                            <Todo provided={provided}
                            innerref={provided.innerRef} 
                            task={task}
                            handleDelete={props.handleDelete}
                            dark={props.dark}
                            handleCheck={props.handleCheck}
                            id={index}/>
                        )}
                    </Draggable>      
                );
            })}
        {provided.placeholder}
        </StyledList>
    )}
    </Droppable>
    <StyledDiv dark={props.dark}>
        <span>{props.tasks.length} items left</span>
        <div className="filters">
            <a href="#">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
        </div>
        <a href="#" onClick={props.clearCompleted}>Clear Completed</a>
    </StyledDiv>
    <StyledDivMobile dark={props.dark}>
            <a href="#">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
    </StyledDivMobile>
    </DragDropContext>
  )
}

export default TodoList