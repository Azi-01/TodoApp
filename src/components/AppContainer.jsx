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
        setTasks([...tasks, {task:value, complete: false}]); 
    }


    function handleChange(e){
        setValue(e.target.value);
    }

    function handleDelete(id){
        const temp = tasks.filter((task,index)=>index!==id);
        setTasks(temp);
    }

    function handleCheck(id){
        const temp = tasks.map((task,index)=>{
            if(index===id){
                return {...task, complete: !task.complete}
            }
            return {...task}
        });
        setTasks(temp);
    }

    function clearCompleted(){
        const temp = tasks.filter(task=>!task.complete);
        setTasks(temp);    
    }

    return (
        <Container>
            <Header dark={props.dark} toggleDark={props.toggleDark}/>
            <Input handleSubmit={handleSubmit} handleChange={handleChange} dark={props.dark}/>
            <TodoList tasks={tasks} 
            updateTasks={setTasks} 
            handleDelete={handleDelete} 
            dark={props.dark} 
            handleCheck={handleCheck}
            clearCompleted={clearCompleted}/>
        </Container>
    )
}

export default AppContainer