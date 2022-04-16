import { useEffect, useId, useState } from 'react';
import Input from './Input';
import TodoList from './TodoList';
import Header from './Header';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-top: 13vh;

    @media only screen and (max-width: 768px){
        width: 60vw;
    }
    @media only screen and (max-width: 450px){
        width: 80vw;
    }
`

function AppContainer(props) {
    const [tasks, setTasks]  = useState([]);
    const [completed, setCompleted]  = useState([]);
    const [active, setActive]  = useState([]);
    const [isComplete, setCompleteStatus]  = useState(false);
    const [isActive, setActiveStatus]  = useState(false);
    const [value, setValue]  = useState("");

    useEffect(()=>{
        if(localStorage.getItem("tasks")==null){
            localStorage.setItem("tasks", JSON.stringify([]));
        }
        setTasks(JSON.parse(localStorage.getItem("tasks")));
    },[])

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])

    function handleSubmit(e){
        e.preventDefault();
        if(value!=="" && value!==undefined && value !==null){
            setTasks([...tasks, {task:value, complete: false}]);
            setCompleteStatus(false)
            setActiveStatus(false);
            e.target.reset();
        }
        
    }


    function handleChange(e){
        setValue(e.target.value);
    }

    function handleDelete(id){
        const temp = tasks.filter((task,index)=>index!==id);
        setCompleteStatus(false)
        setActiveStatus(false);
        setTasks(temp);
    }

    function handleCheck(id){
        const temp = tasks.map((task,index)=>{
            if(index===id){
                return {...task, complete: !task.complete}
            }
            return {...task}
        });
        setCompleteStatus(false)
        setActiveStatus(false);
        setTasks(temp);
    }

    function clearCompleted(){
        const temp = tasks.filter(task=>!task.complete);
        setTasks(temp);
    }
    
    function filterCompleted(){
        const temp = tasks.filter(task=>task.complete);
        setActive([]);
        setCompleted(temp);
        setCompleteStatus(true)
        setActiveStatus(false);
    }
    
    function filterAll(){
        setCompleted([]);
        setActive([]);
        setCompleteStatus(false)
        setActiveStatus(false);
    }
    
    function filterActive(){
        const temp = tasks.filter(task=>!task.complete);
        setCompleted([]);
        setActive(temp);
        setCompleteStatus(false)
        setActiveStatus(true);
    }

    return (
        <Container>
            <Header dark={props.dark} toggleDark={props.toggleDark}/>
            <Input handleSubmit={handleSubmit} handleChange={handleChange} dark={props.dark}/>
            <TodoList tasks={(!isComplete) ? (!isActive) ? tasks : active: completed}
            updateTasks={setTasks} 
            handleDelete={handleDelete} 
            dark={props.dark} 
            handleCheck={handleCheck}
            clearCompleted={clearCompleted}
            filterCompleted={filterCompleted}
            filterAll={filterAll}
            filterActive={filterActive}/>
        </Container>
    )
}

export default AppContainer;