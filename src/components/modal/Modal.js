import React from "react";
const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal_content">
        Add / Edit Forms
        {/* needs some handler to close Modal */}
        <button
          onClick={(e) => {
            props.closeModal();
          }}
        >
          close Modal
        </button>
      </div>
    </div>
  );
};
export default Modal;
