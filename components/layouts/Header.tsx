"use client";

import Image from 'next/image';
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  const [isMenuOpen, setMenuOpen] = useState(false);

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
        <Link href={item.url} className={`${isScrolled ? "text-gray-950 hover:text-primary" : "text-[#ffffff80] hover:text-white"} font-medium`}>
          {item.title}
        </Link>
      </li>
    ));
  }

  const renderMenuMobile = () => {
    return (
      <DropdownMenu onOpenChange={() => {setMenuOpen(!isMenuOpen)}}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            {isMenuOpen ? <FiX className="w-6 h-auto" /> : <FiMenu className="w-6 h-auto" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end" className="w-screen">
          {
            menuItems.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link href={item.url}>{item.title}</Link>
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <header
      className={`${isScrolled ? "bg-[#fffc]" : "bg-white min-[991px]:bg-[#ffffff00]"} w-full fixed top-0 z-50`}
    >
      <div className="wrapper h-[74px] flex items-center wrapper">
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={150}
              height={50}
              priority
              // className="h-auto w-auto"
            />
          </Link>
        </div>
        <div className="min-[991px]:hidden">
          {renderMenuMobile()}
        </div>
        <div className="hidden min-[991px]:block">
          <nav>
            <ul className="flex gap-12">
              {renderMenu()}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
