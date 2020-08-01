import React from "react";
import { Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import "./Hero.scss";

const Hero = ({onClick, children }) => (
  //No componente Row depois do Jumbotron foi tirado a margem do lado direito com a classe utilitária
  <Jumbotron className="text-center text-light hero" fluid>
    <Row className="my-lg-5 mr-0">
      <Col lg className="text-lg-right my-lg-5">
        <Image className="d-lg-none" src={logo} />
        <Image className="d-none d-lg-inline-block" src={logoDesktop} />
      </Col>
      <Col lg className="text-lg-left my-lg-5 p-0">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light" onClick={onClick}>
        {children }
        </Button>
      </Col>
    </Row>
  </Jumbotron>
);

export default Hero;
