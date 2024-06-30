'use client'
import React, {useContext } from 'react';
interface ModalProps {
  // Define the expected properties for the Modal component
  content: React.ReactNode;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = props => {
  return (
    <div className="popup-box flex justify-center fixed inset-0 z-50">
      <div className={`box flex-col`}>
        {props.content}
        <button
            className={`w-full bg-[#414A78] p-2 border-4 mt-2 border-solid border-white font-text text-2xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white space-x-2`}
            data-text="Fermer"
            onClick={props.handleClose}
        >
                            <span className="align-middle text-white">C</span>
                            <span className="align-middle text-white">L</span>
                            <span className="align-middle text-white">O</span>
                            <span className="align-middle text-white">S</span>
                            <span className="align-middle text-white">E</span>
        </button>
      </div>
    </div>
  );
};
 
export default Modal;