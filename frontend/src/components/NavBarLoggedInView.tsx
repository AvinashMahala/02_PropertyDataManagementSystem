import { Button, Nav } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes_api";
import navBarStyles from "../styles/component.navbar.module.css";

interface NavBarLoggedInViewProps{
    user: User,
    onLogoutSuccessful: ()=>void,
}

const NavBarLoggedInView = ({ user, onLogoutSuccessful }: NavBarLoggedInViewProps) => {
    async function logout(){
        try{
            await NotesApi.logout();
            onLogoutSuccessful();
        }catch(error){
            console.error(error);
            alert(error);
        }
    }

    return (
        <>
        <div>
            <Nav.Item className={navBarStyles.signedInAsText}>
                <span>Signed in as: {user.username}</span>
            </Nav.Item>
            <Nav.Item>
                <span><Button className={navBarStyles.fancyButton} variant="button" onClick={logout}>Log Out</Button></span>
            </Nav.Item>
        </div>
            
        </>
    );
}

export default NavBarLoggedInView;
