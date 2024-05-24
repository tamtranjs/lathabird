"use client";

import { useRef, useEffect } from 'react';

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClickOutSide?: () => void;
}

const DropdownContent: React.FC<DropdownProps> = ({ 
  label,
  children,
  isOpen,
  setIsOpen,
  onClickOutSide,
}) => {

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClickOutSide && onClickOutSide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen, onClickOutSide]);

  return (
    <div ref={dropdownRef} className="relative select-none">
      <div onClick={() => {
        // setIsOpen(!isOpen)
      }}>
        {label}
      </div>
      {isOpen && (
        <div className="w-full z-20 absolute right-0 mt-2 rounded-md shadow-lg bg-white">
          {children}
        </div>
      )}
      {/* <div
        className={`w-full z-20 absolute right-0 border rounded-md shadow-lg bg-white transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {children}
      </div> */}
    </div>
  );
}

export default DropdownContent;