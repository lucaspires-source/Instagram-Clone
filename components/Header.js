import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image src="https://links.papareact.com/ocw" alt="logo" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default Header;
