import { Container } from "react-bootstrap";

import { User } from "../models/user";


interface NotificationsPageProps{
  loggedInUser:User | null,
}

const NotificationsPage = ({loggedInUser}:NotificationsPageProps) => {
    return (
      <Container>
        <h4>Notifications Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default NotificationsPage;