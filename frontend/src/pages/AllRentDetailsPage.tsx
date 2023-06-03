import { Container } from "react-bootstrap";
import { User } from "../models/user";
import AllRentsLoggedInView from "../components/allRentDetails/AllRentsLoggedInView";
import AllRentsLoggedOutView from "../components/allRentDetails/AllRentsLoggedOutView";


interface AllRentDetailsPageProps{
  loggedInUser:User | null,
}

const AllRentDetailsPage = ({loggedInUser}:AllRentDetailsPageProps) => {
    return (
      <>{loggedInUser ? <AllRentsLoggedInView /> : <AllRentsLoggedOutView />}</>
    );
  };

  
  export default AllRentDetailsPage;