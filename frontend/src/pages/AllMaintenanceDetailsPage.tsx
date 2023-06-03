import { Container } from "react-bootstrap";
import { User } from "../models/user";
import MaintenanceRequestsLoggedInView from "../components/allMaintenanceDetails/MaintenanceRequestsLoggedInView";
import MaintenanceRequestsLoggedOutView from "../components/allMaintenanceDetails/MaintenanceRequestsLoggedOutView";


interface AllMaintenanceDetailsPageProps{
  loggedInUser:User | null,
}

const AllMaintenanceDetailsPage = ({loggedInUser}:AllMaintenanceDetailsPageProps) => {
    return (
      <>{loggedInUser ? <MaintenanceRequestsLoggedInView /> : <MaintenanceRequestsLoggedOutView />}</>
    );
  };

  
  export default AllMaintenanceDetailsPage;