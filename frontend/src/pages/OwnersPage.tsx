import { User } from "../models/user";
import OwnerDetailsLoggedOutView from "../components/owners/OwnerDetailsLoggedOutView";
import OwnerDetailsLoggedInView from "../components/owners/OwnerDetailsLoggedInView";

interface OwnerDetailsPageProps{
    loggedInUser:User | null,
}


const OwnerDetailsPage = ({loggedInUser}:OwnerDetailsPageProps) => {
  return (
      <>
        {loggedInUser 
        ? <OwnerDetailsLoggedInView /> 
        : <OwnerDetailsLoggedOutView />}
      </>
  );
};

export default OwnerDetailsPage;
