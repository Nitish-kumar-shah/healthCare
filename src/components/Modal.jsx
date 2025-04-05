import React, { useState } from "react";
import Button from "./Button";
import SymptompsChecaker from "./SymptompsChecaker";
import { RxCross1 } from "react-icons/rx";

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <header className="hero min-h-screen grid place-items-center">
//         <div className="banner">
//           <h1>Symptoms Checker</h1>
//           <Button
//             className="modal-btn uppercase bg-transparent text-black px-3 py-1.5 tracking-wide inline-block transition-all text-sm border-2 border-black cursor-pointer shadow-md hover:text-white hover:bg-black"
//             onClick={() => setIsOpen(true)}
//           >
//             Check
//           </Button>
//         </div>
//       </header>

//       <div
//         className={`modal-overlay fixed top-0 left-0 w-full h-full bg-blue-300/50 grid place-items-center transition-all ${
//           isOpen ? "visible z-10" : "invisible -z-10"
//         }`}
//       >
//         <div className="modal-container bg-white rounded-md w-[90vw] h-[90%] max-w-[70%] text-center grid place-items-center relative pt-7">
//           <SymptompsChecaker />
//           <Button className="close-btn" onClick={() => setIsOpen(false)}>
//             <RxCross1 />
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;

// -------------------------

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don’t render anything if modal is closed

  return (
    <div className="fixed inset-0 z-50 bg-blue-300/50 overflow-auto">
      <div className="modal-container bg-white rounded-md w-[90vw] max-w-[800px] max-h-[90vh] overflow-y-auto p-4 relative">
        <SymptompsChecaker />
        <button
          className="absolute top-4 right-4 text-black text-xl"
          onClick={onClose}
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default Modal;
