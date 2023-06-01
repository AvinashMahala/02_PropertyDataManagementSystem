import { Container } from "react-bootstrap";

import { User } from "../models/user";


interface ProfilePageProps{
  loggedInUser:User | null,
}

const ProfilePage = ({loggedInUser}:ProfilePageProps) => {
    return (
      <Container>
        <h4>Profile Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default ProfilePage;