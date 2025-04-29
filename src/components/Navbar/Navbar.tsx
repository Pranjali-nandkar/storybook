import React, { useState } from 'react';
import { NavbarProps } from './Navbar.types';

export const Navbar: React.FC<NavbarProps> = ({ brand, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2d2d2d] text-white px-6 py-4" role="navigation">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl font-bold">{brand}</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`focus:outline-none focus:ring-2 focus:ring-white rounded ${
                link.label === 'Contact'
                  ? 'bg-[#00bcd4] text-white px-4 py-2 rounded-full hover:bg-[#00acc1]'
                  : 'text-white hover:underline'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`focus:outline-none focus:ring-2 focus:ring-white rounded ${
                link.label === 'Contact'
                  ? 'bg-[#00bcd4] text-white px-4 py-2 rounded-full hover:bg-[#00acc1]'
                  : 'text-white hover:underline'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
