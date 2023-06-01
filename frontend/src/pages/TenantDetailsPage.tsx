import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface TenantDetailsPageProps{
  loggedInUser:User | null,
}

const TenantDetailsPage = ({loggedInUser}:TenantDetailsPageProps) => {
    return (
      <Container>
        <h4>Tenant Details Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default TenantDetailsPage;