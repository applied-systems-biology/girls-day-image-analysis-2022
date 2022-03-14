import hki_logo from './img/HKI_Logo.png';
import girls_day_logo from "./img/GirlsDay_Logo.png"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Tab, Tabs} from "react-bootstrap";
import {AlgorithmPlayground} from "./components/AlgorithmPlayground";

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
                        <AlgorithmPlayground />
                    </Tab>
                    <Tab eventKey={"detailed-analysis"} title={"Was ist wirklich hinter der Analyse?"}>

                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default App;
