import { useEffect, useState } from "react";
import styled from "styled-components";
import AppPage from "./components/AppPage";

const StyledPage = styled.div`
  background-color: ${props=> props.darkMode ? "hsl(235, 21%, 11%)" : "white"};
`


function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === 'true');


  useEffect(()=>{
    localStorage.setItem("dark", darkMode);
  },[darkMode])
  
  function handleToggle(){
      setDarkMode(!darkMode);
  }
  return (
    <StyledPage darkMode={darkMode}>
    <AppPage darkMode={darkMode} handleToggle={handleToggle}/>
    </StyledPage>
  )
}

export default App