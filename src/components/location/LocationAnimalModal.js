import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Animal from '../animal/Animal'

const LocationModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const animals = props.animals

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="info" onClick={toggle}>Our Pups</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Who is staying with us today?</ModalHeader>
        <ModalBody className="animalList">
            {animals.map((animal) => <Animal key={animal.id} animal={animal}/> )}

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LocationModal;