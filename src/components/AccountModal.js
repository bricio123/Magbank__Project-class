import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

import "../components/AccountModal.scss";

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} className="Form__account">
    <section className="form__all__back">
      <Modal.Header closeButton className="prop_color__text">
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-4">
          <Form.Group controlId="formBasicName" className="text-center">
            <Form.Label className="font-weight-normal text-white">
              Seu nome{" "}
            </Form.Label>
            <Form.Control type="text" required className="form__inputs" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="text-center">
            <Form.Label className="font-weight-normal text-white">
              Seu email
            </Form.Label>
            <Form.Control type="email" className="form__inputs" />
          </Form.Group>

          <Form.Group controlId="formCity" className="text-center">
            <Form.Label
              className="font-weight-normal font-weight-normal text-white "
              htmlFor="formCitySelect"
            >
              Sua cidade
            </Form.Label>

            <Form.Control
              as="select"
              className=" mr-sm-2 form__inputs"
              id="inlineFormCustomSelect"
              custom
            >
              <option className="text-dark">...</option>
              <option value="0" className="text-dark">
                Florianópolis - SC
              </option>
              <option value="1" className="text-dark">
                Curitiba - PR
              </option>
              <option value="2" className="text-dark">
                São Paulo - SP
              </option>
              <option value="3" className="text-dark">
                Rio de Janeiro - RJ
              </option>
              <option value="4" className="text-dark">
                Palmas - TO
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Eu li e concordo com os termos de uso."
              className="font-weight-normal font-weight-normal text-white"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <button onClick={handleClose} className="button_color font-weight-normal">
          Criar conta
        </button>
      </Modal.Footer>
    </section>
  </Modal>
);

export default AccountModal;
