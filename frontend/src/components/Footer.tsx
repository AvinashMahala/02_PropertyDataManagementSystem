import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer: React.FC = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
            <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Row>
                    <Col md={3}>
                        <h5>PDMS</h5>
                        <p>PDMS is a comprehensive application designed to simplify the management of property data and rental information. It provides a centralized platform for property owners, tenants, and administrators to effectively manage property details, rental agreements, payments, and communication.</p>
                    </Col>
                    <Col md={3}>
                        <h5>Legal</h5>
                        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <p>123 Street Name, City, State, Country</p>
                        <p>+1 123 456 7890</p>
                        <p>info@ourcompany.com</p>
                    </Col>
                    <Col md={3}>
                        <h5>Follow Us</h5>
                        {/* <a href="#"><FontAwesomeIcon  size="2x" /></a>{' '}
                        <a href="#"><FontAwesomeIcon size="2x" /></a>{' '}
                        <a href="#"><FontAwesomeIcon size="2x" /></a>{' '} */}
                    </Col>
                </Row>
                <Row style={{ borderTop: '1px solid #dee2e6', paddingTop: '10px' }}>
                    <Col md={12} style={{ textAlign: 'center' }}>
                        <p style={{ margin: '10px 0' }}>© {new Date().getFullYear()} PDMS</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;
