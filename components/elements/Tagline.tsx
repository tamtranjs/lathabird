import { FiClock, FiMapPin, FiMail, FiFacebook, FiInstagram, FiTwitter, FiPhone } from "react-icons/fi"
import Link from "next/link";

export default function Tagline() {
  return (
    <div className="bg-slate-900 h-12">
      <div className="wrapper flex items-center justify-between text-slate-300 text-sm h-full">
        <ul className="flex space-x-2">
          <li className="inline-flex items-center">
            <FiClock className="text-red-500 size-4"/>
            <span className="ml-2">Mon-Sat: 9am to 6pm</span>
          </li>
          <li className="flex items-center">
            <FiMapPin className="text-red-500 size-4"/>
            <span className="ml-2">Houston, USA 485</span>
          </li>
        </ul>
        <ul className="flex space-x-2">
          <li className="inline-flex items-center">
            <FiMail className="text-red-500 size-4"/>
            <span className="ml-2">
              <Link href="mailto:contact@example.com">
                contact@example.com
              </Link>
            </span>
          </li>
          <li className="ml-2">
            <ul className="inline-flex items-center space-x-3 h-full">
              <li><Link href="#" className="text-slate-300 hover:text-red-500"><FiFacebook className="size-4"/></Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-red-500"><FiInstagram className="size-4"/></Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-red-500"><FiTwitter className="size-4"/></Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-red-500"><FiPhone className="size-4"/></Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
