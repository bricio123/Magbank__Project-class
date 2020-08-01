import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import '../components/AccountModal.scss';

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} className='Form__account'>
    <Modal.Header closeButton className='prop_color__text'>
      <Modal.Title>Abra sua conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form className='p-4'>
        <Form.Group controlId='formBasicName' className='text-center' >
          <Form.Label className='font-weight-bold'>Seu nome </Form.Label>
          <Form.Control type='text' placeholder='Seu nome' required className='form__inputs' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail' className='text-center'  >
          <Form.Label className='font-weight-bold'>Seu email</Form.Label>
          <Form.Control type='email' placeholder='Seu email' className='form__inputs'/>
        </Form.Group>

        <Form.Group controlId='formCity' className='text-center'  >
          <Form.Label className='my-1 mr-2 font-weight-bold' htmlFor='formCitySelect'>
            Sua cidade
          </Form.Label>

          <Form.Control
            as='select'
            className='my-1 mr-sm-2 form__inputs'
            id='formCitySelect'
            custom
          >
          
            <option value='0'>Florianópolis - SC</option>
            <option value='1'>Curitiba - PR</option>
            <option value='2'>São Paulo - SP</option>
            <option value='3'>Rio de Janeiro - RJ</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            type='checkbox'
            label='Eu li e concordo com os termos de uso.'
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={handleClose}>
        Cancelar
      </Button>
      <button onClick={handleClose} className='button_color' >
        Criar Conta
      </button>
    </Modal.Footer>
  </Modal>
);

export default AccountModal;