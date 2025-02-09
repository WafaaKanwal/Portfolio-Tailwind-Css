"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav
        className="p-6 shadow-md relative z-10"
        style={{ background: "linear-gradient(to right, #6b21a8, #1b0853)" }}
      >
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-white">
            <Link href="/">Wafa Kanwal</Link>
          </div>
          <div className="block lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`lg:flex gap-20 font-medium text-lg ${
              isOpen ? "block" : "hidden"
            } lg:block`}
          >
            <li>
              <Link href="/" className="text-white hover:text-indigo-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-indigo-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-white hover:text-indigo-200">
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-white hover:text-indigo-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-indigo-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
