import { Container } from "react-bootstrap";
import { User } from "../models/user";


interface AllRentReceiptMetaDataPageProps{
  loggedInUser:User | null,
}

const AllRentReceiptMetaDataPage = ({loggedInUser}:AllRentReceiptMetaDataPageProps) => {
    return (
      <Container>
        <h4>All Rent Receipt Meta-Data Details Page</h4>
        <>
          
        </>
      </Container>
    );
  };

  
  export default AllRentReceiptMetaDataPage;