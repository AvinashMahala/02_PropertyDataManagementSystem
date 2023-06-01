import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface AllRentDetailsPageProps{
  loggedInUser:User | null,
}

const AllRentDetailsPage = ({loggedInUser}:AllRentDetailsPageProps) => {
    return (
      <Container>
        <h4>All Rent Details Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default AllRentDetailsPage;