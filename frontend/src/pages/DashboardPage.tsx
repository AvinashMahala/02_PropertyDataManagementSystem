import { Container } from "react-bootstrap";
import DashboardPageLoggedInView from "../components/dashboard/DashboardPageLoggedInView";
import DashboardPageLoggedOutView from "../components/dashboard/DashboardPageLoggedOutView";
import styles from "../styles/NotesPage.module.css"; 
import { User } from "../models/user";

interface DashboardPageProps{
    loggedInUser:User | null;
}


const DashboardPage = ({loggedInUser}:DashboardPageProps) => {
  return (
      <>
        {loggedInUser 
        ? <DashboardPageLoggedInView title="" loggedInUser={loggedInUser}/> 
        : <DashboardPageLoggedOutView />}
      </>
  );
};

export default DashboardPage;
