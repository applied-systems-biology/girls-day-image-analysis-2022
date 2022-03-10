import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, Row} from "react-bootstrap";

function App() {
    return (
        <div>
            <Navbar bg="light" expand={"lg"}>
                <Navbar.Brand>Girl's Day 2022</Navbar.Brand>
            </Navbar>
            <Row>
                <Col>Test</Col>
                <Col>Test2</Col>
            </Row>
        </div>
    );
}

export default App;
