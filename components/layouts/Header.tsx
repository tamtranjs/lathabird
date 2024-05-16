import Image from 'next/image';
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="bg-gray-500 sticky top-0">
      <div className="max-w-[1140px] mx-auto h-[74px] flex items-center wrapper bg-slate-100">
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button>
            <HamburgerMenuIcon className="w-6 h-auto"/>
          </button>
        </div>
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-12">
              <li>
                <Link href="/flight" className="text-gray-950 hover:text-blue-400 font-medium">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/hotel" className="text-gray-950 hover:text-blue-400 font-medium">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/tour" className="text-gray-950 hover:text-blue-400 font-medium">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/visa" className="text-gray-950 hover:text-blue-400 font-medium">
                  Visa
                </Link>
              </li>
              <li>
                <Link href="/alerts" className="text-gray-950 hover:text-blue-400 font-medium">
                  Alerts
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-950 hover:text-blue-400 font-medium">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/travel-photos" className="text-gray-950 hover:text-blue-400 font-medium">
                  Travel Photos
                </Link>
              </li>
            </ul>
          </nav>
          
        </div>
      </div>
    </header>
  )
}
