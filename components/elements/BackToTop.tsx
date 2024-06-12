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
      className="back-to-top fixed text-lg rounded-md z-10 bottom-5 end-5 size-8 text-center transition-opacity duration-300 bg-palette3 hover:bg-primary text-primary hover:text-white justify-center items-center"
      style={{ display: visible ? "inline-flex" : "none" }}
    >
      <FiArrowUp />
    </button>
  );
}
