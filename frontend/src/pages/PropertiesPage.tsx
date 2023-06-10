import { Container } from "react-bootstrap";
import { User } from "../models/user";
import PropertyLoggedInView from "../components/properties/PropertiesLoggedInView";
import PropertiesLoggedOutView from "../components/properties/PropertiesLoggedOutView";

interface AllPropertiesDetailsPageProps {
  loggedInUser: User | null;
}

const AllPropertiesDetailsPage = ({
  loggedInUser,
}: AllPropertiesDetailsPageProps) => {
  return (
    <>{loggedInUser ? <PropertyLoggedInView /> : <PropertiesLoggedOutView />}</>
  );
};

export default AllPropertiesDetailsPage;
