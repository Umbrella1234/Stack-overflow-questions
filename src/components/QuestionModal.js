import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export const QuestionModal = ({isOpen, title, body, onClose }) => (
  <div>
    <Modal size="lg" isOpen={isOpen}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);
