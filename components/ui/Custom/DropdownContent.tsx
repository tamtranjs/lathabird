"use client";

import { useRef, useEffect } from 'react';

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClickOutSide?: () => void;
  dataType?: string;
}

const DropdownContent: React.FC<DropdownProps> = ({ 
  label,
  children,
  isOpen,
  setIsOpen,
  onClickOutSide,
  dataType = "dynamic",
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
         if (dataType === "static") {
          setIsOpen(true)
         }
      }}>
        {label}
      </div>
      <div style={{ display: isOpen? "block" : "none"}}>
        <div className="w-full z-20 absolute right-0 mt-2 rounded-md shadow-lg bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DropdownContent;