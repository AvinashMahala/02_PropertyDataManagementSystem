import React, { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { User } from '../models/user';

interface MasterViewPageProps {
  children: ReactNode;
  title: string;
  loggedInUser: User | null;
  onSignUpClicked:()=>void;
  onLoginClicked:()=>void;
  onLogoutSuccessful:()=>void;
}

const MasterViewPage: React.FC<MasterViewPageProps> = ({ children, title, loggedInUser, onSignUpClicked, onLoginClicked, onLogoutSuccessful }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Row style={{ flex: '1' }}>
        <Col style={{ maxWidth: '300px' }}>
          <NavBar 
            loggedInUser={loggedInUser}
            onSignUpClicked={onSignUpClicked}
            onLoginClicked={onLoginClicked}
            onLogoutSuccessful={onLogoutSuccessful}
          />
        </Col>
        <Col>
          <Container>
            <h1>{title}</h1>
            {children}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default MasterViewPage;
