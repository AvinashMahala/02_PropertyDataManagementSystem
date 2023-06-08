import { Container } from "react-bootstrap";
import { User } from "../models/user";
import TenantsLoggedInView from "../components/tenants/TenantLoggedInView";
import TenantsLoggedOutView from "../components/tenants/TenantLoggedOutView";


interface TenantDetailsPageProps{
  loggedInUser:User | null,
}

const TenantDetailsPage = ({loggedInUser}:TenantDetailsPageProps) => {
    return (
      <>{loggedInUser ? <TenantsLoggedInView /> : <TenantsLoggedOutView />}</>
    );
  };

  
  export default TenantDetailsPage;