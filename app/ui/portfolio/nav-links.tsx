'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.


const links = [
    { name: '1', 
    href: '/portfolio' 
},
    {
    name: '2',
    href: '/portfolio/view/2',
    },
    {
        name: '3',
        href: '/portfolio/view/3',
    },
    {
        name: '4',
        href: '/portfolio/view/4',
    },
    {
        name: '5',
        href: '/portfolio/view/5',
    },
    {
        name: '6',
        href: '/portfolio/view/6',
    },
    {
        name: '7',
        href: '/portfolio/view/7',
    },
    {
        name: '8',
        href: '/portfolio/view/8',
    },
    {
        name: '9',
        href: '/portfolio/view/9',
    },
    {
        name: '10',
        href: '/portfolio/view/10',
    },
];

export default function NavLinks({isToggle}: {isToggle: boolean}) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm transition-all duration-300 ease-in-out border-b border-b-transparent text-gray-700 hover:border-b-slate-400 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-black font-bold': pathname === link.href,
                'md:items-center md:justify-center': !isToggle
              },
            )}
          >
            <p className={clsx(
              "hidden md:block ease-in-out duration-300 flex-none",
              {
                'md:hidden': !isToggle
              }
            )}>Chapter</p>
            <span className={clsx(
              "hidden md:block ease-in-out duration-300 flex-none border border-slate-400 w-10",
              {
                'md:hidden': !isToggle
              }
            )}></span>
            <div className='border border-slate-400 rounded-full w-8 h-8 flex items-center justify-center'>
                {link.name}
            </div>
          </Link>
        );
      })}
    </>
  );
}
