import React, { useState } from "react";

import SymptompsChecaker from "./SymptompsChecaker";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div z-50>
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="modal-container bg-white rounded-md w-[90vw] max-w-[800px] max-h-[90vh] overflow-y-auto p-4 relative">
          <SymptompsChecaker />
          <button
            className="absolute top-4 right-4 text-black text-xl hover:scale-150 hover:text-red-500 cursor-pointer"
            onClick={onClose}
          >
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
