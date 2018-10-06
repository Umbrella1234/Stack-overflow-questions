import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import styled from "styled-components";

const LinkWrapper = styled.div`
  margin-bottom: 15px;
`;

export const QuestionModal = ({ isOpen, title, body, onClose, link }) => (
  <div>
    <Modal size="lg" isOpen={isOpen}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <LinkWrapper>
          Link: <a href={link}>{link}</a>
        </LinkWrapper>
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
