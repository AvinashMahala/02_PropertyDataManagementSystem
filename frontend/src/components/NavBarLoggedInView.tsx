import { Button, Nav } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes_api";

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
            <Nav.Item>
                <Nav.Link disabled>Signed in as: {user.username}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button variant="link" onClick={logout}>Log Out</Button>
            </Nav.Item>
        </>
    );
}

export default NavBarLoggedInView;
