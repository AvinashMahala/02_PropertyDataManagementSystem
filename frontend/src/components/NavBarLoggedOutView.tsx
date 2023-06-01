import { Button, Nav } from "react-bootstrap";

interface NavBarLoggedOutViewProps{
    onSignUpClicked:()=>void,
    onLoginClicked:()=>void,
}

const NavBarLoggedOutView = ({onSignUpClicked, onLoginClicked}:NavBarLoggedOutViewProps)=>{
    return (
        <>
            <Nav.Item>
                <Button variant="link" onClick={onSignUpClicked}>Sign Up</Button>
            </Nav.Item>
            <Nav.Item>
                <Button variant="link" onClick={onLoginClicked}>Log In</Button>
            </Nav.Item>
        </>
    );
}

export default NavBarLoggedOutView;
