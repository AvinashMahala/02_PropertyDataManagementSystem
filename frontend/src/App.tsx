import { useEffect, useState } from "react";
import LoginModal from "./components/LoginModal";
import NavBar from "./components/NavBar";
import SignUpModal from "./components/SignUpModal";
import { User } from "./models/user";
import * as NotesApi from "./network/notes_api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NotesPage from "./pages/NotesPage";
import DashboardPage from "./pages/DashboardPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./styles/App.module.css";

import MasterViewPage from "./pages/MasterViewPage";

import AdminDashboardPage from "./pages/AdminDashboardPage";
import OwnerDetailsPage from "./pages/OwnerDetailsPage";
import DashboardPageLoggedInView from "./components/dashboard/DashboardPageLoggedInView";


function App() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await NotesApi.getLOggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.mainAppDiv}>
        <Routes>
          <Route 
            path='/' 
            element={
              <MasterViewPage 
                title="Dashboard" 
                loggedInUser={loggedInUser}
                onLoginClicked={() => setShowLoginModal(true)}
                onSignUpClicked={() => setShowSignUpModal(true)}
                onLogoutSuccessful={() => setLoggedInUser(null)}
              >
                <DashboardPage loggedInUser={loggedInUser} />
              </MasterViewPage>
            } 
          />
          <Route
				path='/privacy'
				element={<PrivacyPage />}
			/>
			<Route 
			path='/*'
			element={<NotFoundPage />}
			/>
        </Routes>
        {showSignUpModal && (
        <SignUpModal
          onDismiss={() => setShowSignUpModal(false)}
          onSignUpSuccessful={(user) => {
            setLoggedInUser(user);
            setShowSignUpModal(false);
          }}
        />
      )}
      {showLoginModal && (
        <LoginModal
          onDismiss={() => setShowLoginModal(false)}
          onLoginSuccessful={(user) => {
            setLoggedInUser(user);
            setShowLoginModal(false);
          }}
        />
      )}
      </div>
    </BrowserRouter>
  );
}

export default App;
