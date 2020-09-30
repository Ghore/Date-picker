import React from "react";
import ModalBody from "react-bootstrap/ModalBody";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import "../../Scss/section/modal.scss";

function CreateModal({ currentMonth, selectedDay, handleClose }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="wrap">
      <ModalDialog>
        <ModalHeader>
          <h3>Months</h3>
          <p>{months[currentMonth]}</p>
        </ModalHeader>
        <ModalBody>
          <h3>Days</h3>
          <p>{selectedDay}</p>
          <button onClick={handleClose} className="btnClose">
            X
          </button>
        </ModalBody>
      </ModalDialog>
    </div>
  );
}

export default CreateModal;
