"use client";

import Image from 'next/image';
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

const menuItems = [
  {
    title: "Flights",
    url: "/flights"
  },
  {
    title: "Hotels",
    url: "/hotels"
  },
  {
    title: "Tours",
    url: "/tours"
  },
  {
    title: "Visa",
    url: "/visa"
  },
  {
    title: "Alerts",
    url: "/alerts"
  },
  {
    title: "Blogs",
    url: "/blogs"
  },
  {
    title: "Travel Photos",
    url: "/travel-photos"
  }
];

export default function Header() {

  const [isScrolled, setScrolled] = useState(false);

  const checkScrollTop = () => {
    if (!isScrolled && window.scrollY > 48) {
      setScrolled(true);
    } else if (isScrolled && window.scrollY <= 48) {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isScrolled]);

  const renderMenu = () => {


    return menuItems.map((item, index) => (
      <li key={index}>
        <Link href={item.url} className={`${isScrolled ? "text-gray-950 hover:text-blue-400" : "text-[#ffffff80] hover:text-white"} font-medium`}>
          {item.title}
        </Link>
        </li>
    ));
  }

  return (
    <header
      className={`${isScrolled ? "bg-[#fffc]" : "bg-[#ffffff00]"} w-full fixed top-0 z-50`}
      // className="bg-gray-500 w-full "
      >
      <div className="max-w-[1140px] mx-auto h-[74px] flex items-center wrapper">
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
              {renderMenu()}
              {/* <li>
                <Link href="/flights" className="text-gray-950 hover:text-blue-400 font-medium">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-gray-950 hover:text-blue-400 font-medium">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-950 hover:text-blue-400 font-medium">
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
              </li> */}
            </ul>
          </nav>
          
        </div>
      </div>
    </header>
  )
}
