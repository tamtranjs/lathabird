"use client";

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"
import { FaAngleRight } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "@/lib/data";

export default function Header() {

  const pathname = `/${usePathname().split("/")[1]}`;
  const router = useRouter();
 
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
        <Link href={item.url}
          className={
            `font-medium ${pathname === item.url ? "text-primary" : isScrolled ? "text-gray-950" : "text-white"} hover:text-primary`}>
          {item.title}
        </Link>
      </li>
    ));
  }

  const onMenuClick = (url: string) => {
    router.push(url)
  }

  const renderMenuMobile = () => {
    return (
      <DropdownMenu onOpenChange={() => {setMenuOpen(!isMenuOpen)}}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            {isMenuOpen ? <FiX className="w-6 h-auto" /> : <FiMenu className="w-6 h-auto" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end" className="wrapper w-screen sm:w-[640px] mt-3 p-0">
          <DropdownMenuGroup>
          {
            menuItems.map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className={`${pathname === item.url ? "text-primary" : ""} text-base hover:text-primary px-4 flex justify-between`}
                  onClick={() => onMenuClick(item.url)}
                >
                  <span>{item.title}</span>
                  <FaAngleRight className="w-4 h-auto" />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </div>
            ))
          }
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <header
      className={`${isScrolled ? "bg-[#fffc]" : "bg-[#ffffff1a] max-[991px]:bg-[#fff]"} header`}
    >
      <div className="wrapper h-[74px] flex items-center wrapper">
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <Image
              src="/lathabird-logo.svg"
              alt="Logo"
              width={200}
              height={150}
              priority
              className="h-auto w-auto"
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
