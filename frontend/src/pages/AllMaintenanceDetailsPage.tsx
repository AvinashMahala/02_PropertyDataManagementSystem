import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface AllMaintenanceDetailsPageProps{
  loggedInUser:User | null,
}

const AllMaintenanceDetailsPage = ({loggedInUser}:AllMaintenanceDetailsPageProps) => {
    return (
      <Container>
        <h4>All Maintenance Details Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default AllMaintenanceDetailsPage;