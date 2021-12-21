/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import React from 'react';
import {
  SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon,
} from '@heroicons/react/outline';

import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm bg-white border-b sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="relative hidden lg:inline-grid w-24">
          <Image src="https://links.papareact.com/ocw" alt="logo" layout="fill" objectFit="contain" onClick={() => router.push('/')} />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0  mt-4">
          <Image src="https://links.papareact.com/jjm" alt="logo" layout="fill" objectFit="contain" onClick={() => router.push('/')} />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input className="bg-gray-50  block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black " type="text" placeholder="Search" />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push('/')} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>

              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img src={session?.user?.image} alt="avatar" className="h-10 rounded-full cursor-pointer" onClick={signOut} />
            </>

          ) : (
            <button type="button" onClick={signIn}>Sign In</button>
          )}

        </div>
      </div>

    </div>
  );
}

export default Header;
