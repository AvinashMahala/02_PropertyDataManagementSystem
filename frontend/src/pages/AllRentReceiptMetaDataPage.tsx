import { Container } from "react-bootstrap";
import { User } from "../models/user";
import RentReceiptMetaDataLoggedInView from "../components/rentReceiptMetaData/RentReceiptMetaDataLoggedInView";
import RentReceiptMetaDataLoggedOutView from "../components/rentReceiptMetaData/RentReceiptMetaDataLoggedOutView";


interface AllRentReceiptMetaDataPageProps{
  loggedInUser:User | null,
}

const AllRentReceiptMetaDataPage = ({loggedInUser}:AllRentReceiptMetaDataPageProps) => {
    return (
      <Container>
        <h4>All Rent Receipt Meta-Data Details Page</h4>
        <>
        {loggedInUser 
        ? <RentReceiptMetaDataLoggedInView /> 
        : <RentReceiptMetaDataLoggedOutView />}
        </>
      </Container>
    );
  };

  
  export default AllRentReceiptMetaDataPage;