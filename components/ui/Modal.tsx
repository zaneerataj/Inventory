import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        {children}
        <button onClick={onClose} className="mt-4 p-2 bg-gray-300 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
