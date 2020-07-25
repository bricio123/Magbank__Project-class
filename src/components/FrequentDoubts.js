import React from "react";
import { Container, Row, Col, Accordion , Card, Tab, ListGroup, SignUp, SignIn } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faShieldAlt,
  faUserTie,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "./FrequentDoubts.scss";
import "./IconText";
const Doubts = () => (
  <section className="p-3 text-white back-color">
    <Container>
      <Col>
        <Row className="d-flex flex-column align-items-center py-5 ">
          <h2 className="ti-color">Dúvidas frequentes</h2>
        </Row>

        <Row className="d-flex flex-row align-items-center">


          <Col xs={5}>
            <Row className="py-2">
              <Col>
                <FontAwesomeIcon icon={faCreditCard} size="2x" color="#fff" />
              </Col>
              <Col xs={10} className="h5 ">
                <h3 className="Doubts__text__icons">
                  Cartão de crédito e débito
                </h3>
              </Col>
            </Row>

            <Row className="py-2 " >
              <Col >
                <FontAwesomeIcon icon={faWallet} size="2x" color="#fff" />
              </Col>
              <Col xs={10} className="h5">
                <h3 className="Doubts__text__icons">Conta e abertura</h3>
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#fff" />
              </Col>
              <Col xs={10} className="h5">
                <h3 className="Doubts__text__icons">Token digital</h3>
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <FontAwesomeIcon icon={faUserTie} size="2x" color="#fff" />
              </Col>
              <Col xs={10} className="h5">
                <h3 className="Doubts__text__icons">Produtos e serviços</h3>
              </Col>
            </Row>
          </Col>

          <Col>
            <Accordion defaultActiveKey="0" className="border border-secondary">
              <Card className="border border-secondary">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="first_text text-white"
                >
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
                <Accordion.Collapse
                  eventKey="0"
                  className="back-color text-white "
                >
                  <Card.Body className="text_body m-3">
                    <p >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                      dolor dignissim. Nam eget quam semper, varius ligula sed,
                      auctor augue. Maecenas et porta magna. Nulla mattis tortor
                      vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                      suscipit. Curabitur scelerisque placerat ultrices. Proin
                      purus ante, congue vel arcu ac, porta condimentum mauris.
                      Maecenas massa orci, fringilla eget fermentum nec,
                      dignissim nec diam.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border border-secondary">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  className="first_text text-white"
                >
                  Nulla porttitor eros ac ex tristique posuere
                </Accordion.Toggle>
                <Accordion.Collapse
                  eventKey="1"
                  className="back-color text-white"
                >
                  <Card.Body className="text_body m-3">
                    <p >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                      dolor dignissim. Nam eget quam semper, varius ligula sed,
                      auctor augue. Maecenas et porta magna. Nulla mattis tortor
                      vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                      suscipit. Curabitur scelerisque placerat ultrices. Proin
                      purus ante, congue vel arcu ac, porta condimentum mauris.
                      Maecenas massa orci, fringilla eget fermentum nec,
                      dignissim nec diam.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border border-secondary">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className="first_text text-white"
                >
                  Quisque fringilla tincidunt arcu
                </Accordion.Toggle>
                <Accordion.Collapse
                  eventKey="2"
                  className=" back-color text-white"
                >
                  <Card.Body className="text_body m-3">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                      dolor dignissim. Nam eget quam semper, varius ligula sed,
                      auctor augue. Maecenas et porta magna. Nulla mattis tortor
                      vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                      suscipit. Curabitur scelerisque placerat ultrices. Proin
                      purus ante, congue vel arcu ac, porta condimentum mauris.
                      Maecenas massa orci, fringilla eget fermentum nec,
                      dignissim nec diam.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border border-secondary">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  className="first_text text-white"
                >
                  Nam elementum lobortis purus a maximus tortor
                </Accordion.Toggle>
                <Accordion.Collapse
                  eventKey="3"
                  className="back-color text-white"
                >
                  <Card.Body className="text_body m-3">
                    <p className="p_body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                      dolor dignissim. Nam eget quam semper, varius ligula sed,
                      auctor augue. Maecenas et porta magna. Nulla mattis tortor
                      vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                      suscipit. Curabitur scelerisque placerat ultrices. Proin
                      purus ante, congue vel arcu ac, porta condimentum mauris.
                      Maecenas massa orci, fringilla eget fermentum nec,
                      dignissim nec diam.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Col>
    </Container>
  </section>
);
export default Doubts;
