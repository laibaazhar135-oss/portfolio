"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:items-center lg:gap-x-12">
        <Link
          href="#home"
          className="no-underline font-medium text-text-on-bg hover:text-primary-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="no-underline font-medium text-text-on-bg hover:text-primary-500 transition-colors"
        >
          About
        </Link>
        <Link
          href="#case-study"
          className="no-underline font-medium text-text-on-bg hover:text-primary-500 transition-colors"
        >
          Work
        </Link>
        <Link
          href="#contact"
          className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline text-text-on-card"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
        <i
          className={`pi ${
            isOpen ? "pi-times" : "pi-bars"
          } text-primary-500 text-2xl leading-none`}
        ></i>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute inset-x-4 top-full mt-4 flex origin-top flex-col rounded-2xl bg-background p-4 text-lg tracking-tight text-text-on-bg shadow-xl ring-1 ring-text-on-bg/5 ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={closeMenu}
      >
        <Link href="#home" className="no-underline p-2 text-text-on-bg">
          Home
        </Link>
        <Link href="#about" className="no-underline p-2 text-text-on-bg">
          About
        </Link>
        <Link href="#case-study" className="no-underline p-2 text-text-on-bg">
          Work
        </Link>
        <Link href="#contact" className="no-underline p-2 text-text-on-bg">
          Contact
        </Link>
      </div>
    </nav>
  );
}