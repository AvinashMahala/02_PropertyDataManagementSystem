import { Container, Nav, Row, Col } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";
import { Link } from "react-router-dom";

interface NavBarProps{
    loggedInUser: User | null,
    onSignUpClicked:()=>void,
    onLoginClicked:()=>void,
    onLogoutSuccessful:()=>void,
}

const NavBar=({loggedInUser, onSignUpClicked, onLoginClicked, onLogoutSuccessful}: NavBarProps)=>{
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="col-auto">
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="/">
                            PDMS
                        </Nav.Link>
                        <Nav.Link as={Link} to="/privacy">
                            Privacy
                        </Nav.Link>
                        {loggedInUser
                            ? <NavBarLoggedInView user={loggedInUser} onLogoutSuccessful={onLogoutSuccessful}/>
                            : <NavBarLoggedOutView onLoginClicked={onLoginClicked} onSignUpClicked={onSignUpClicked} />
                        }
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default NavBar;
