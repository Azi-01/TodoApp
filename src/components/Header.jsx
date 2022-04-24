import styled from 'styled-components';
import moonIcon from '../../images/icon-moon.svg';
import sunIcon from '../../images/icon-sun.svg';
import {motion, AnimatePresence} from 'framer-motion';

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
            <AnimatePresence>
            {props.dark ? <motion.img whileHover={{scale:1.2}} animate={{y:0}} whileTap={{scale:0.9, y:-200}} transition={{duration:0.2}} src={sunIcon} alt="light mode"/> : <motion.img whileHover={{scale:1.2}} animate={{y:0}} whileTap={{y:-200}} transition={{duration:0.2}} src={moonIcon} alt="dark mode" />}
            </AnimatePresence>
        </div>
        
    </StyledHeader>
  )
}

export default Header