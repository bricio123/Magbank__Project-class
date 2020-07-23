import React from "react";
/*bootstrap */
import { Row, Col, Jumbotron } from "react-bootstrap";
/*Css */
import './Navbar.scss';

/*icones */
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const Card = () => (
  <Jumbotron>
    <Row>
      <Col>
      <FontAwesomeIcon icon={faCoffee} />
      </Col>
      <Col>
      
      </Col>
    </Row>
  </Jumbotron>
);

export default Card;
