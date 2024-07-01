'use client'
import React, {useContext } from 'react';
interface ModalProps {
  // Define the expected properties for the Modal component
  content: React.ReactNode;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = props => {
  return (
    <div className="popup-box flex justify-center items-center fixed inset-0 z-50">
      <div className={`box flex flex-col items-center`}>
        {props.content}
        <button
            className={`bg-[#4d619e] p-2 mt-2 border-2 border-solid border-white text-[#f3f3f3] font-text text-sm rounded-xl hover:bg-pink-300 mx-auto`}
            data-text="Fermer"
            onClick={props.handleClose}
        >
                            <span className="align-middle text-white">X</span>
                            
        </button>
      </div>
    </div>
  );
};
 
export default Modal;