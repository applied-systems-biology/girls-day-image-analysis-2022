import {Component} from "react";
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import hyphaeImage from "../img/hyphae.png";
import nematodeImage from "../img/nematode.jpg";
import nematodeAreaImage from "../img/nematode-area.png";
import pipelineImage from "../img/pipeline.png";
import teamImage from "../img/team.png";

function coverWith(image) {
    return {
        "background": `url(${image})`,
        "background-size": "cover"
    }
}

export class InfoText extends Component {
    render() {
        return (<Container className={"mt-3"}>
            <Row xs={1} md={2} className="g-4">
                <Card style={coverWith(hyphaeImage)}>
                    <Row className={"p-3"}>
                        <Col>
                        </Col>
                        <Col className={"bg-blur text-white rounded-2"}>
                            <Card.Body>
                                <Card.Title>Im Boden lebende Pilze sind gut für das Pflanzenwachstum</Card.Title>
                                <Card.Text >Auf dem Bild siehst du eine Mikroskopieaufnahme eines Pilzfadens (Hyphe).
                                    Diese ist mit einem Farbstoff blau gefärbt.
                                    Innen drin sieht man grün gefärbe Bakterien, die mit dem Pilz in einer Symbiose (beide haben etwas davon) zusammenleben.</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card style={coverWith(nematodeImage)} className={"p-3"}>
                    <Row>
                        <Col>
                        </Col>
                        <Col className={"bg-blur text-black rounded-2 "}>
                            <Card.Body>
                                <Card.Title>Fadenwürmer sind natürliche Fressfeinde der Pilze</Card.Title>
                                <Card.Text >Auf dem Bild siehst du eine Mikroskopieaufnahme des Pilzes und einiger Fadenwürmer (Nematoden), die den Pilz fressen.
                                    <strong> Der Pilz ist aber nicht komplett wehrlos!</strong></Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card style={coverWith(teamImage)} className={"p-3"}>
                    <Row>
                        <Col>
                        </Col>
                        <Col className={"bg-blur text-white rounded-2 "}>
                            <Card.Body>
                                <Card.Title>Keine Ahnung? Forschen!</Card.Title>
                                <Card.Text>Zu verstehen wie Pilze sich wehren, kann z.B. zur Entwicklung von umweltfreundlichen und bodenschonenden Alternativen
                                von Düngung und Giften beitragen. Deshalb haben ein Team von Forschern bestehend aus <i>Hannah Büttner, Sarah P. Niehs, Koen Vandelannoote, Zoltán Cseresnyés,
                                        Benjamin Dose, Ingrid Richter, Ruman Gerst, Marc Thilo Figge, Timothy P. Stinear, Sacha J. Pidot, und Christian Hertweck</i> sich diese Interaktion etwas näher angeschaut.</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card style={coverWith(nematodeAreaImage)} className={"p-3"}>
                    <Row>
                        <Col>
                        </Col>
                        <Col className={"bg-blur text-white rounded-2 "}>
                            <Card.Body>
                                <Card.Title>Rolle der Bakterien</Card.Title>
                                <Card.Text >Es wurde untersucht, ob nicht vielleicht die Bakterien ein Gift gegen die Würmer produziert.
                                    Dazu wurden diese z.B. mit Antibiotika abgetötet. Um zu schauen, ob Würmer leben, prüft man einfach wie weit sie sich bewegen.
                                    <br/> Das will aber keiner von Hand machen! Hunderte Würmer sind auf einem einzigen Mikroskopiebild.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card style={coverWith(pipelineImage)} className={"p-3"}>
                    <Row>
                        <Col>
                        </Col>
                        <Col className={"bg-blur text-white rounded-2 "}>
                            <Card.Body>
                                <Card.Title>Automatische Analyse mit dem Computer</Card.Title>
                                <Card.Text >Statt alles per Hand zu zählen, wurde ein Computerprogramm entwickelt, das alle Würmer automatisch findet,
                                    über die Zeit verfolgt und alles in Tabellen und Diagramme schreibt. <br/>
                                    Einfach das Programm anwerfen und nach dem Mittagessen sind alle Ergebnisse da.<br/>
                                    <strong>Ein Programm kann aber nicht deine Gedanken lesen! Es ist viel Aufwand damit verbunden, alles einzustellen.
                                    Probiere es doch einmal selbst aus!</strong>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Quellen</Card.Title>
                        <Card.Text>
                            Hier findest du weiterführende Informationen, falls dich das Thema interessiert:
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className={"list-group-flush"}>
                        <ListGroupItem>Vollständiger Text: <a href={"https://www.leibniz-hki.de/de/pressemitteilung/mikroben-vereint-gegen-den-feind.html"} target={"_blank"}>https://www.leibniz-hki.de/de/pressemitteilung/mikroben-vereint-gegen-den-feind.html</a></ListGroupItem>
                        <ListGroupItem>Veröffentlichung in einem wissenschaftlichen Journal (Englisch): <a href={"https://doi.org/10.1073/pnas.2110669118"} target={"_blank"}>Büttner H, Niehs SP, Vandelannoote K, Cseresnyés Z, Dose B, Richter I, Gerst R, Figge MT, Stinear TP, Pidot SJ, Hertweck C (2021) Bacterial endosymbionts protect beneficial soil fungus from nematode attack. Proc Natl Acad Sci U S A, 118 (37) e2110669118</a></ListGroupItem>
                    </ListGroup>
                </Card>
            </Row>
        </Container>)
    }
}