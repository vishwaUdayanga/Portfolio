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
    <main className="flex justify-center items-center min-h-screen">
        <div className={`transition-opacity flex justify-center items-center flex-col gap-5 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image src="/main/welcome.png" alt="Welcome" width={400} height={400} />
          <Link href="/introduction" className="border border-cyan-950 rounded-3xl px-7 py-1 text-base transition-colors duration-300 ease-in-out hover:bg-cyan-950 mt-3 hover:text-white">Explore</Link>
        </div>
    </main>
  );
}
