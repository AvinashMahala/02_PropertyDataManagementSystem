import { Container } from "react-bootstrap";
import { User } from "../models/user";
import PropertyLoggedInView from "../components/allPropertiesDetails/PropertiesLoggedInView";
import PropertiesLoggedOutView from "../components/allPropertiesDetails/PropertiesLoggedOutView";


interface AllPropertiesDetailsPageProps{
  loggedInUser:User | null,
}

const AllPropertiesDetailsPage = ({loggedInUser}:AllPropertiesDetailsPageProps) => {
    return (
      <>
        {loggedInUser 
        ? <PropertyLoggedInView /> 
        : <PropertiesLoggedOutView />}
        </>
    );
  };

  
  export default AllPropertiesDetailsPage;