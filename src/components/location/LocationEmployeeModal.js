import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Employee from '../employee/Employee'

const LocationEmployeeModal = (props) => {
  const {
    className
  } = props;

  const employees = props.employees
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="info" onClick={toggle}>Our People</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Who's lettin the dogs out?</ModalHeader>
        <ModalBody className="animalList">
            {employees.map((employee) => <Employee key={employee.id} employee={employee}/> )}

        </ModalBody>
        <ModalFooter>
          <Button className="locationModalButton" color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button className="locationModalButton" color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LocationEmployeeModal;