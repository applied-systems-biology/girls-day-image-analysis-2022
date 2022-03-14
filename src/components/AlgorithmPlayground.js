import {Component, Fragment} from "react";
import {
    Alert,
    Button,
    ButtonGroup,
    Col,
    Container,
    Form,
    Row,
    Table
} from "react-bootstrap";
import ReactFlow from "react-flow-renderer";
import VideoNode from "./VideoNode";
import DataDescription from "../data/data";
import DataMap from "../data/data-map";

const nodeTypes = {
    videoNode: VideoNode,
};
const nodeWidth = 200;
const flowStyles = { height: 300 };

export class AlgorithmPlayground extends Component {
    constructor(props) {
        super(props);
        this.state = DataDescription["initial-state"];
    }

    setControlValue(controlId, event) {
        const index = event.target.value;
        const value = DataDescription.controls[controlId].options[index];
        const stateMap = {};
        stateMap[controlId] = value;
        this.setState(stateMap)
    }

    createForm() {
        return (
            <Form>
                { DataDescription["control-order"].map(controlId => (
                    <Fragment key={"control-form-" + controlId}>
                        <Row>
                            <Col>
                                <Form.Label>{DataDescription["controls"][controlId]["label"]}</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Range min={0} max={DataDescription["controls"][controlId]["options"].length - 1} defaultValue={DataDescription.controls[controlId].options.indexOf(this.state[controlId])} onChange={event => this.setControlValue(controlId, event)}/>
                            </Col>
                            <Col xs={"auto"}>
                                <Form.Label>{this.state[controlId]}</Form.Label>
                            </Col>
                        </Row>
                    </Fragment>
                )) }
            </Form>
        )
    }

    createImageSelectForm() {
        return (<ButtonGroup className={"mb-5"}>
            <Button variant={"info"}>Bild auswählen:</Button>
            {
                Object.keys(DataMap.archive.raw).map(dataSetId => (
                    <Button active={this.state["#Ds"] === dataSetId} key={"image-select-" + dataSetId} onClick={() => this.setState({ "#Ds": dataSetId })}>#{dataSetId}</Button>
                ))
            }
        </ButtonGroup>)
    }

    getFileNameForCurrentState(step) {
        const ids = DataMap["step-controls"][step];
        let target = DataMap["archive"][step];
        ids.forEach(id => {
            target = target[this.state[id]];
        })
        return target.filename;
    }

    getScoreForCurrentState(dataSet) {
        const step = "post";
        const ids = DataMap["step-controls"][step];
        let target = DataMap["archive"][step][dataSet];
        ids.slice(1).forEach(id => {
            target = target[this.state[id]];
        })
        return target.score;
    }

    getAverageScoreForCurrentState() {
        const step = "post";
        const ids = DataMap["step-controls"][step];
        let count = 0;
        let sum = 0;
        Object.keys(DataMap["archive"][step]).forEach(dataSetId => {
            let target = DataMap["archive"][step][dataSetId];
            ids.slice(1).forEach(id => {
                target = target[this.state[id]];
            })
            count += 1
            sum += parseFloat(target.score)
        })
        return sum / count
    }

    getRenderedFileNameForCurrentState(step) {
        return require("../data/" + this.getFileNameForCurrentState(step))
        // return require("../videos/nematodes-movie-0.webm")
    }

    renderEvaluatedScore(scoreString) {
        const score = parseFloat(scoreString)
        if (score > 99) {
            return ( <><span>{score}</span><br/><span className={"score-evaluation-perfect"}>Perfekt!</span></> )
        }
        else if(score > 90) {
            return ( <><span>{score}</span><br/><span className={"score-evaluation-good"}>Gut!</span></> )
        }
        else if(score > 80) {
            return ( <><span>{score}</span><br/><span className={"score-evaluation-ok"}>OK</span></> )
        }
        else if(score > 70) {
            return ( <><span>{score}</span><br/><span className={"score-evaluation-bad"}>Schlecht</span></> )
        }
        else {
            return ( <><span>{score}</span><br/><span className={"score-evaluation-very-bad"}>Ganz schlecht!</span></> )
        }
    }

    createGraph() {
        const elements = [
            { id: 'raw', type: "videoNode", data: { label: 'Unbearbeitet ', video: this.getRenderedFileNameForCurrentState("raw") }, position: { x: 0, y: 0 }, sourcePosition: "left", targetPosition: "right" },
            { id: 'preprocessed', type: "videoNode", data: { label: 'Vorprozessiert', video: this.getRenderedFileNameForCurrentState("pre") }, position: { x: nodeWidth + 100, y: 0 }, sourcePosition: "left", targetPosition: "right" },
            { id: 'thresholded', type: "videoNode", data: { label: "Segmentiert", video: this.getRenderedFileNameForCurrentState("seg") }, position: { x: 2 * (nodeWidth + 100), y: 0 }, sourcePosition: "left", targetPosition: "right" },
            { id: 'final', type: "videoNode", data: {label: "Nachprozessiert", video: this.getRenderedFileNameForCurrentState("post")}, position: { x: 3 * (nodeWidth + 100), y: 0 }, sourcePosition: "left", targetPosition: "right" },
            { id: "e-raw-preprocessed", source: "raw", target: "preprocessed", animated: true, type: "step" },
            { id: "e-preprocessed-thresholded", source: "preprocessed", target: "thresholded", animated: true, type: "step" },
            { id: "e-thresholded-final", source: "thresholded", target: "final", animated: true, type: "step" }
        ];
        return (<ReactFlow elements={elements} style={flowStyles} nodeTypes={nodeTypes} />)
    }

    createScoreBoard() {
        return (<Table bordered={true}>
            <thead><tr><th>Bild Nr.</th><th>Ergebnis</th></tr></thead>
            <tbody>
            { Object.keys(DataMap.archive.post).map(dataSetId =>
                (<tr key={"score-" + dataSetId} className={ this.state["#Ds"] === dataSetId ? "table-active" : "" }>
                    <td>#{dataSetId}</td>
                    <td>{this.renderEvaluatedScore(this.getScoreForCurrentState(dataSetId))}</td>
                </tr>)
            )}
            <tr>
                <td>Durchschnitt</td>
                <td>{this.renderEvaluatedScore(this.getAverageScoreForCurrentState().toFixed(2))}</td>
            </tr>
            </tbody>
        </Table> )
    }

    componentDidMount() {
    }

    render() {
        return (
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
                    <Col>{this.createGraph()}</Col>
                </Row>
                <Row>
                    <Col>
                        { this.createImageSelectForm() }
                        { this.createForm() }
                    </Col>
                    <Col>{ this.createScoreBoard() }</Col>
                </Row>
            </Container>
        )
    }
}
