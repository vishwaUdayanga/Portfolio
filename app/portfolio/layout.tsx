'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import SideNav from '../ui/portfolio/sidenav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className={
            clsx(
                'w-full transition-width duration-300 ease-in-out flex-none',
                { 'md:w-20': !toggle,
                'md:w-64': toggle
                }
            )
            } 
        >
            <SideNav isToggle={toggle} />
        </div>
        <div className="flex-grow md:overflow-y-auto">
            <div className="w-full justify-between items-center p-4 hidden md:flex">
            <Image src="/portfolio/menu.png" alt="Menu" width={15} height={15} onClick={handleToggle} className="cursor-pointer"/>
            </div>
            {children}
        </div>
        </div>
    );
};

export default DashboardLayout;