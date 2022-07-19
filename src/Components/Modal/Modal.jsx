import React from "react";
import ReactDOM from "react-dom";

const modalroot = document.getElementById("modal");
const Modal = ({ children, displayModal }) => {
  return <>{displayModal && ReactDOM.createPortal(children, modalroot)}</>;
};

export { Modal };
