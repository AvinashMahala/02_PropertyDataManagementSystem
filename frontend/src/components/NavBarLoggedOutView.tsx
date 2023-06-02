import { Button, Nav } from "react-bootstrap";
import navBarStyles from "../styles/component.navbar.module.css";

interface NavBarLoggedOutViewProps{
    onSignUpClicked:()=>void,
    onLoginClicked:()=>void,
}

const NavBarLoggedOutView = ({onSignUpClicked, onLoginClicked}:NavBarLoggedOutViewProps)=>{
    return (
        <>
            <Nav.Item>
                <Button className={navBarStyles.fancyButton} variant="button" onClick={onSignUpClicked}>Sign Up</Button>
            </Nav.Item>
            <Nav.Item>
                <Button className={navBarStyles.fancyButton} variant="button" onClick={onLoginClicked}>Log In</Button>
            </Nav.Item>
        </>
    );
}

export default NavBarLoggedOutView;
