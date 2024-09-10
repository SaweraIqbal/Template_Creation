import React from 'react';

// Higher-Order Component
const withHeader = (WrappedComponent) => {
  return ({ logoSrc, title, navLinks, buttonText, buttonLink }) => {
    return (
      <header className="bg-[#0A0B19] text-white w-full h-full flex items-center justify-between px-4 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logoSrc} alt="Logo" className="h-4 w-4 object-contain" />
          <span className="font-semibold text-lg text-[8px]">{title}</span>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1">
          <ul className="flex justify-around items-center w-full space-x-1">
            {navLinks.map((link, index) => (
              <li key={index} className="text-sm">
                <a href={link.href} className="hover:text-gray-400 transition-colors text-[8px]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="text-sm">
          <a href={buttonLink} className="bg-[#6C38FF] py-2 px-4 rounded-full hover:bg-purple-700 transition-colors text-[8px]">
            {buttonText}
          </a>
        </div>
      </header>
    );
  };
};

export default withHeader;
