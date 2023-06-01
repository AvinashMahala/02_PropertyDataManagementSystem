import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface AnalyticsPageProps{
  loggedInUser:User | null,
}

const AnalyticsPage = ({loggedInUser}:AnalyticsPageProps) => {
    return (
      <Container>
        <h4>Analytics Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default AnalyticsPage;