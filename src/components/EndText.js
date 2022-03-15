import {Component} from "react";
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import pipelineImage from "../img/pipeline.png";
import compartmentImage from "../img/compartments.png"
import fullPipelineImage from "../img/full-pipeline.png"
import resultsImage from "../img/results.png"

function coverWith(image) {
    return {
        "background": `url(${image})`,
        "background-size": "cover"
    }
}

export class EndText extends Component {
    render() {
        return (<Container className={"mt-3"}>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={coverWith(pipelineImage)} className={"p-3 h-100"}>
                        <Row>
                            <Col>
                            </Col>
                            <Col className={"bg-blur text-white rounded-2 "}>
                                <Card.Body>
                                    <Card.Title>Nicht so einfach ...</Card.Title>
                                    <Card.Text >Natürlich ist das eigentliche Programm nicht so einfach. Aber es ist nicht in Computercode geschrieben, sondern
                                        mit einer <i>visuellen Programmiersprache</i>. Das heißt, man baut einzelne Schritte in einer grafischen Umgebung zusammen und muss nicht
                                        zusätzlich programmieren lernen.</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card style={coverWith(compartmentImage)} className={"p-3 h-100"}>
                        <Row>
                            <Col>
                            </Col>
                            <Col className={"bg-blur text-white rounded-2 "}>
                                <Card.Body>
                                    <Card.Title>Schritt für Schritt</Card.Title>
                                    <Card.Text >In dem Programm "JIPipe" wurde eine vollständig automatische Analyse für die Wurmdaten gebaut. Eine vereinfachte Version hast
                                        du hier auf der Seite gesehen. In Echt ist das Finden der richtigen Reihenfolge aber etwas schwieriger. Zum Beispiel hat JIPipe alleine
                                        fast 1000 Funktionen zur Verfügung.<br/>Schau dir doch mal die <a href={fullPipelineImage} target={"_blank"}>vollständige</a> Pipeline an (Achtung: Großes Bild!)</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card style={coverWith(resultsImage)} className={"p-3 h-100"}>
                        <Row>
                            <Col>
                            </Col>
                            <Col className={"bg-blur text-white rounded-2 "}>
                                <Card.Body>
                                    <Card.Title>Viel zu tun!</Card.Title>
                                    <Card.Text >Mikroskope und andere Verfahren werden immer besser. Zum Beispiel kann man mit modernen Verfahren sogar einzelne Moleküle sehen!
                                    Wie muss man Programme anpassen, damit sie damit umgehen können? Wie kann man in Echtzeit Analysen ausführen und den Computer helfen lassen?
                                    Wie sollen Ärzte die Programme bedienen können? Schließlich benötigt man starke Computer dafür. Wie kann man Zusammenarbeit verbessern? Und das sind nur einige Punkte wo frische Ideen helfen können!</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className={"p-3 h-100"}>
                        <Card.Body>
                            <Card.Title>Quellen</Card.Title>
                            <Card.Text>
                                Hier findest du weiterführende Informationen, falls dich das Thema interessiert:
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className={"list-group-flush"}>
                            <ListGroupItem>JIPipe Webseite (Englisch): <a href={"https://www.jipipe.org"} target={"_blank"}>https://www.jipipe.org</a></ListGroupItem>
                            <ListGroupItem>Wurm-Analyse: Veröffentlichung in einem wissenschaftlichen Journal (Englisch): <a href={"https://doi.org/10.1073/pnas.2110669118"} target={"_blank"}>Büttner H, Niehs SP, Vandelannoote K, Cseresnyés Z, Dose B, Richter I, Gerst R, Figge MT, Stinear TP, Pidot SJ, Hertweck C (2021) Bacterial endosymbionts protect beneficial soil fungus from nematode attack. Proc Natl Acad Sci U S A, 118 (37) e2110669118</a></ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>)
    }
}