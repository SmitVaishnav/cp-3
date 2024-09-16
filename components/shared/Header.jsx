import React from 'react';

/**
 * Header component
 * 
 * @param {Object} props - The props for the component
 * @param {string} props.title - The title to display
 * @param {string} [props.subtitle] - An optional subtitle to display
 * @returns {JSX.Element} The rendered component
 */
const Header = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
    </>
  );
};

export default Header;
