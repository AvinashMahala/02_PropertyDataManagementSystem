import { Container } from "react-bootstrap";
import { User } from "../models/user";
import TenantsLoggedInView from "../components/tenantDetails/TenantLoggedInView";
import TenantsLoggedOutView from "../components/tenantDetails/TenantLoggedOutView";


interface TenantDetailsPageProps{
  loggedInUser:User | null,
}

const TenantDetailsPage = ({loggedInUser}:TenantDetailsPageProps) => {
    return (
      <>{loggedInUser ? <TenantsLoggedInView /> : <TenantsLoggedOutView />}</>
    );
  };

  
  export default TenantDetailsPage;