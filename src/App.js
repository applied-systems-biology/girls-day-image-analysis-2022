import hki_logo from './img/HKI_Logo.png';
import girls_day_logo from "./img/GirlsDay_Logo.png"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Col, Container, Form, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import ReactFlow from "react-flow-renderer";
import VideoNode from "./VideoNode";

const nodeTypes = {
    videoNode: VideoNode,
};
const nodeWidth = 200;
const elements = [
    { id: 'raw', type: "videoNode", data: { label: 'Unbearbeitet' }, position: { x: 0, y: 0 }, sourcePosition: "left", targetPosition: "right" },
    { id: 'preprocessed', type: "videoNode", data: { label: 'Vorprozessiert' }, position: { x: nodeWidth + 100, y: 0 }, sourcePosition: "left", targetPosition: "right" },
    { id: 'thresholded', type: "videoNode", data: { label: "Segmentiert" }, position: { x: 2 * (nodeWidth + 100), y: 0 }, sourcePosition: "left", targetPosition: "right" },
    { id: 'final', type: "videoNode", data: {label: "Nachprozessiert"}, position: { x: 3 * (nodeWidth + 100), y: 0 }, sourcePosition: "left", targetPosition: "right" },
    { id: "e-raw-preprocessed", source: "raw", target: "preprocessed", animated: true, type: "step" },
    { id: "e-preprocessed-thresholded", source: "preprocessed", target: "thresholded", animated: true, type: "step" },
    { id: "e-thresholded-final", source: "thresholded", target: "final", animated: true, type: "step" }
];
const flowStyles = { height: 500 };

function App() {
    return (
        <div>
            <Navbar bg="light" expand={"lg"}>
                <Container>
                    <Navbar.Brand>
                        <img height={64} src={hki_logo} alt={"HKI logo"}/>
                        <img height={40} src={girls_day_logo} alt={"HKI logo"}/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Tabs defaultActiveKey={"info"} className={"mt-3"}>
                    <Tab eventKey={"info"} title={"Was wird analysiert?"}>

                    </Tab>
                    <Tab eventKey={"analysis"} title={"Bildanalyse selbst ausprobieren!"}>
                        <Container>
                            <Row>
                                <Alert variant={"success"} className={"mt-3"} >
                                    <p>
                                        Hier kannst du die Analyse der Wurm-Bilder einmal selbst durchspielen. Wir haben schon
                                        eine geeignete Pipeline dafür gebaut ... aber es gibt noch einige Parameter zu optimieren.
                                    </p>
                                    <p>
                                        Probiere doch einmal die Einstellungen unten durch und versuche eine möglichst hohe Punktzahl zu bekommen!
                                    </p>
                                </Alert>
                            </Row>
                            <Row>
                                <Col><ReactFlow elements={elements} style={flowStyles} nodeTypes={nodeTypes} /></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Label>Vorprozessierung: Glättungsstärke</Form.Label>
                                        <Form.Range></Form.Range>
                                        <Form.Label>Segmentierung: Methode</Form.Label>
                                        <Form.Range></Form.Range>
                                        <Form.Label>Nachprozessierung: Maximale Größe (px²)</Form.Label>
                                        <Form.Range></Form.Range>
                                    </Form>
                                </Col>
                                <Col>Test2</Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey={"detailed-analysis"} title={"Was ist wirklich hinter der Analyse?"}>

                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default App;
