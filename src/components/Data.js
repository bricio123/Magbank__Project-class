import React from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Group,
  Label,
  Control,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import "./Data.scss";

function Greeting() {
  return
};

const Data = () => (
  
  
  <Row className="container__form">
    <Form className="form__all my-2 p-5 border rounded">
      <Row>
        <h2>Abra sua conta</h2>
      </Row>
      <Form>
        <Form.Group as={Col} controlId="formGridName ">
          <Form.Label className="">Seu Nome</Form.Label>
          <Form.Control type="Name" placeholder="Ex. Fabricio Sousa" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="fabricio@gmail.com" />
        </Form.Group>
      </Form>

      <Form>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control as="select" defaultValue="Escolha...">
            <option>...</option>
            <option>Florianopolis</option>
            <option>Parana</option>
            <option>Sao Paulo</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Control as="select" defaultValue="Escolha...">
            <option>...</option>
            <option>Sc</option>
            <option>Sc</option>
            <option>Sc</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip"></Form.Group>
      </Form>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Eu li e concordo com os termos de uso" />
      </Form.Group>

      <ButtonGroup aria-label="Basic example" className="d-inline">
        <Button variant="secondary">Cancelar</Button>
        <Button className="button__create ml-2">Criar Conta</Button>
      </ButtonGroup>
    </Form>
  </Row>
);
export default Data;



