import { Container } from "react-bootstrap";
import { User } from "../models/user";
import FlatsLoggedInView from "../components/allFlatDetails/FlatsLoggedInView";
import FlatsLoggedOutView from "../components/allFlatDetails/FlatsLoggedOutView";


interface AllFlatDetailsPageProps{
  loggedInUser:User | null,
}

const AllFlatDetailsPage = ({loggedInUser}:AllFlatDetailsPageProps) => {
    return (
      <>{loggedInUser ? <FlatsLoggedInView /> : <FlatsLoggedOutView />}</>
    );
  };

  
  export default AllFlatDetailsPage;