import React, { useState } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  //   const show = open ? classes.open : null;

  return ReactDom.createPortal(
    <>
      <div className={`${classes.modal} ${open ? classes.show : null}`}>
        <button onClick={onClose}>CLOSE</button>
        {open ? <div>{children}</div> : null}
      </div>

      <div className={open ? classes.overlay : null} onClick={onClose}></div>
    </>,

    document.getElementById("modal-portal")
  );
};

export default Modal;
