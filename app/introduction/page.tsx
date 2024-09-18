'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Introduction() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="flex justify-center items-center min-h-screen p-4">
            <div className={`transition-opacity flex justify-center items-center flex-col gap-5 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image src="/main/introduction.png" alt="Introduction" width={200} height={200} />
                <p className="max-w-screen-sm p-7 border-l-slate-900 border-r-slate-900 border-l border-r mt-4 text-slate-700 text-sm text-center">As of now in the present, prevailing in a specific industry or organization might not only reside on technical knowledge, especially in sectors such as Information Technology. Instead, it involves another aspect, considered as non-technical, soft, or employability skills that is essential for success in any workspace. Taking this fact into consideration, this time, the semester includes a module called Professional Skills that tremendously helps us to enhance employability skills as we step into the internships ahead in the next semester. As a partial fulfillment of this module, we were instructed to make an assessment portfolio to be assessed at the end of the semester to evaluate which insights we gained from this module throughout the semester. My self does not only consider this as an academic activity or a partial fulfillment but also a portal to travel into the real world by coming across different criteria that I could not see apart from my technical knowledge. Ergo, I try my best to give you a set of precise self-reflection, insights, and feedback sumptuously amalgamated in this concise assessment portfolio. See it and enjoy it!</p>
                <p className="text-sm text-rose-600 mt-4 max-w-screen-sm text-center">You are about to travel across ten chapters with interactive content. Make yourself consistent for a movement!</p>
                <Link href="/portfolio" className="border border-cyan-950 rounded-3xl px-7 py-1 text-base transition-colors duration-300 ease-in-out hover:bg-cyan-950 mt-3 hover:text-white">Read it!</Link>
            </div>
        </main>
    )
}