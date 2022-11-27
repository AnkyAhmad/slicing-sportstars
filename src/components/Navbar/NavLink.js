import Link from 'next/link';
import React from 'react';

const NavLink = ({ to, children }) => {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
};

export default NavLink;
