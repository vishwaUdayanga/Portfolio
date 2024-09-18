import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';

export default function SideNav({isToggle}: {isToggle: boolean}) {
  return (
    <div className="flex flex-col px-3 py-2 md:px-2 ease-in-out">
      <Link
        className="mb-2 flex h-10 items-center rounded-md p-2 md:h-16"
        href="/"
      >
        <div className="w-32 text-white md:w-40 flex items-center gap-3">
            <Image src="/portfolio/logo.png" alt="Portfolio Logo" width={250} height={250} />
        </div>
      </Link>
      <div className="flex h-fit flex-row flex-wrap md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks isToggle={isToggle} />
      </div>
    </div>
  );
}