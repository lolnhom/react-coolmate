import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import account from "../../assets/image/icon-account.svg";
import FormValidate from "./Form";

function ModalUser(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img
        src={account}
        onClick={toggle}
        style={{ cursor: "pointer", marginRight: "20px" }}
      />

      <Modal isOpen={modal} toggle={toggle} {...args}>
        <FormValidate />
      </Modal>
    </div>
  );
}

export default ModalUser;
