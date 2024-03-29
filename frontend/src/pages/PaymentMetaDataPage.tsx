import { Container } from "react-bootstrap";
import { User } from "../models/user";
import RentReceiptMetaDataLoggedInView from "../components/paymentMetaData/RentReceiptMetaDataLoggedInView";
import RentReceiptMetaDataLoggedOutView from "../components/paymentMetaData/RentReceiptMetaDataLoggedOutView";


interface AllRentReceiptMetaDataPageProps{
  loggedInUser:User | null,
}

const AllRentReceiptMetaDataPage = ({loggedInUser}:AllRentReceiptMetaDataPageProps) => {
    return (
        <>
        {loggedInUser 
        ? <RentReceiptMetaDataLoggedInView /> 
        : <RentReceiptMetaDataLoggedOutView />}
        </>
    );
  };

  
  export default AllRentReceiptMetaDataPage;