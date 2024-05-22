'use client'
import React, {useContext } from 'react';
interface ModalProps {
  // Define the expected properties for the Modal component
  content: React.ReactNode;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = props => {
  return (
    <div className="popup-box flex justify-center">
      <div className={`box flex-col`}>
        {props.content}
        <button
            className={`w-full bg-[#414A78] p-2 border-4 mt-2 border-solid border-white font-text text-2xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white space-x-2`}
            data-text="Fermer"
            onClick={props.handleClose}
        >
                            <span className="align-middle">C</span>
                            <span className="align-middle">L</span>
                            <span className="align-middle">O</span>
                            <span className="align-middle">S</span>
                            <span className="align-middle">E</span>
        </button>
      </div>
    </div>
  );
};
 
export default Modal;