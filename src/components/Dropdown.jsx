import React, { useState, useRef, useEffect } from 'react';
import arrowBack from '../arrow-back.png';  

const DropdownSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="dropdown-active">
      <div className="dropdown-item">
        <span>{title}</span>
        <button
          className={`arrow-button ${isOpen ? 'rotate' : ''}`}
          onClick={toggleContent}
        >
          <img src={arrowBack} alt="arrow" />
        </button>
      </div>
      <div
        ref={contentRef}
        className={`dropdown-content ${isOpen ? 'open' : ''}`}
      >
        {content}
      </div>
    </div>
  );
};

export default DropdownSection;