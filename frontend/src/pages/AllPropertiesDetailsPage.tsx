import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface AllPropertiesDetailsPageProps{
  loggedInUser:User | null,
}

const AllPropertiesDetailsPage = ({loggedInUser}:AllPropertiesDetailsPageProps) => {
    return (
      <Container>
        <h4>All Properties Details Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default AllPropertiesDetailsPage;