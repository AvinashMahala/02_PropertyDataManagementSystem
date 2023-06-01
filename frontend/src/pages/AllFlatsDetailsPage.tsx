import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface AllFlatDetailsPageProps{
  loggedInUser:User | null,
}

const AllFlatDetailsPage = ({loggedInUser}:AllFlatDetailsPageProps) => {
    return (
      <Container>
        <h4>All Flat Details Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default AllFlatDetailsPage;