'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen p-4">
        <div className={`transition-opacity absolute inset-0 bg-[url('/main/main-bg.png')] bg-cover bg-center duration-1000 ${isVisible ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`transition-opacity flex justify-center items-center flex-col gap-5 duration-1000 relative z-10 h-screen ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Image src="/main/welcome.png" alt="Welcome" width={400} height={400} />
            <Link href="/introduction" className="border border-cyan-950 rounded-3xl px-7 py-1 text-base transition-colors duration-300 ease-in-out hover:bg-cyan-950 mt-3 hover:text-white">Explore</Link>
        </div>
    </main>
  );
}
