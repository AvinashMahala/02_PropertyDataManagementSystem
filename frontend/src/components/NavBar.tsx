import { Container, Nav, Row, Col } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";
import { Link } from "react-router-dom";
import PrivacyPage from './../pages/PrivacyPage';
import DashboardPage from './../pages/DashboardPage';
import OwnerDetailsPage from "../pages/OwnerDetailsPage";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { ReactNode, useState } from "react";

interface NavBarProps {
  loggedInUser: User | null;
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
  onLogoutSuccessful: () => void;
  onButtonLinkClick: (component: ReactNode) => void; // Updated prop for button link click event
}


const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLoginClicked,
  onLogoutSuccessful,
  onButtonLinkClick // Updated prop for button link click event
}: NavBarProps) => {
  const [activeComponent, setActiveComponent] = useState(null);
  const handleButtonLinkClick = (component: ReactNode) => {
    onButtonLinkClick(component);
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#333"
        className={""}
        breakpoint={0}
        toggled={false}
        minWidth={""}
        maxWidth={""}
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            PDMS
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Nav.Link onClick={() => handleButtonLinkClick(<DashboardPage loggedInUser={loggedInUser} />)}>
              <CDBSidebarMenuItem icon="house-user">Home</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link onClick={() => handleButtonLinkClick(<PrivacyPage />)}>
              <CDBSidebarMenuItem icon="lock">Privacy</CDBSidebarMenuItem>
            </Nav.Link>
            {loggedInUser ? (
              <NavLink to="/profile">
                <CDBSidebarMenuItem icon="user">
                  Profile page
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {loggedInUser ? (
              <NavLink to="/analytics">
                <CDBSidebarMenuItem icon="chart-line">
                  Analytics
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {loggedInUser ? (
              <Nav.Link onClick={() => handleButtonLinkClick(<OwnerDetailsPage loggedInUser={loggedInUser} />)}>
                <CDBSidebarMenuItem icon="table">
                  Owner Details
                </CDBSidebarMenuItem>
              </Nav.Link>
            ) : (
              <></>
            )}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div style={{ padding: "20px 5px" }}>
            {loggedInUser ? (
              <NavBarLoggedInView
                user={loggedInUser}
                onLogoutSuccessful={onLogoutSuccessful}
              />
            ) : (
              <NavBarLoggedOutView
                onLoginClicked={onLoginClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default NavBar;
