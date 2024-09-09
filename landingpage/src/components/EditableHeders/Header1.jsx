import React from 'react';
import withHeader from './withHeader'; // Import the HOC
import logo from '../../assets/logo.png'; // Your logo

// Define the data to be passed to the HOC
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Our Process', href: '#process' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Our Blog', href: '#blog' },
];

// Define the Header1 component and wrap it with the HOC
const Header1 = withHeader(() => null); // The inner component is just a placeholder

const Header1Component = () => {
  return (
    <Header1
      logoSrc={logo}
      title="Title"
      navLinks={navLinks}
      buttonText="Contact Us"
      buttonLink="#contact"
    />
  );
};

export default Header1Component;
