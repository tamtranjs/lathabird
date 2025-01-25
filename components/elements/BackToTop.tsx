"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top"
      className="rounded-full back-to-top p-2 sm:p-4 fixed text-lg z-10 bottom-[70px] sm:bottom-[90px] right-6 end-5 text-center transition-opacity duration-300 bg-blue-500 hover:bg-blue-600 text-white justify-center items-center"
      style={{ display: visible ? "inline-flex" : "none" }}
    >
      <FiArrowUp className="w-6 h-6" />
    </button>
  );
}
