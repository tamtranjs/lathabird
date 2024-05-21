"use client";

import { useRef, useEffect } from 'react';

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DropdownContent: React.FC<DropdownProps> = ({ 
  label,
  children,
  isOpen,
  setIsOpen,
}) => {

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div ref={dropdownRef} className="relative select-none">
      <div onClick={() => {
        setIsOpen(!isOpen)
        console.log('====================================');
        console.log('isOpen', isOpen);
        console.log('====================================');
      }}>
        {label}
      </div>
      {isOpen && (
        <div className="w-full z-20 absolute right-0 mt-2 rounded-md shadow-lg bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

export default DropdownContent;