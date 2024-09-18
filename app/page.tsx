import Image from "next/image";
import Link from "next/link";

export default function Home() {
  

  return (
    <main className="flex justify-center items-center min-h-screen bg-[url('/main/main-bg.png')] p-4">
        <div className="flex justify-center items-center flex-col">
          <Image src="/main/wait.png" alt="Wait!" width={200} height={200} />
          <p className="max-w-md text-center text-white mt-4 text-sm">This theme will be changed to show you the assessment portfolio deu to the dark colors applied in here.</p>
          <Link href="/welcome" className="border text-pink-600 border-pink-600 rounded-3xl px-7 py-2 font-bold text-base transition-colors duration-300 ease-in-out hover:bg-pink-600 mt-5 hover:text-white">Change Theme & Go</Link>
        </div>
    </main>
  );
}
