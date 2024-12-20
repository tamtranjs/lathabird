import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { footerSocial, menuItems } from "@/lib/data";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="wrapper relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div className="md:col-span-12 lg:col-span-4">
                  <Link href="#" className="text-[22px] focus:outline-none">
                    <Image
                      src={"/lathabird-logo.svg"}
                      alt=""
                      width={150}
                      height={150}
                      className="w-auto h-auto"
                    />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    Bạn đang lên kế hoạch cho một chuyến đi? Chúng tôi sẽ sắp
                    xếp chuyến đi của bạn với những địa điểm tốt nhất và với
                    ngân sách tốt nhất!
                  </p>
                  <ul className="list-none mt-6 space-x-1">
                    {footerSocial.map((item, index) => {
                      let Icon = item.icon;
                      return (
                        <li className="inline" key={index}>
                          <Link
                            href={item.link}
                            target="_blank"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                          >
                            <Icon
                              className="size-4 align-middle"
                              title="Go"
                            ></Icon>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* <div className="lg:col-span-3 md:col-span-4">
                  <div className="lg:ms-8">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Office</h5>
                    <h5 className="tracking-[1px] text-gray-100 mt-6">Travosy Tour & Travels</h5>

                    <div className="flex mt-4">
                      <FiMapPin className="size-4 text-red-500 me-2 mt-1"></FiMapPin>
                      <div className="">
                        <h6 className="text-gray-300">C/54 Northwest Freeway, <br /> Suite 558, <br /> Houston, USA 485</h6>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <FiMail className="size-4 text-red-500 me-2 mt-1"></FiMail>
                      <div className="">
                        <Link href="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">contact@example.com</Link>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <FiPhone className="size-4 text-red-500 me-2 mt-1"></FiPhone>
                      <div className="">
                        <Link href="tel:+152534-468-854" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+152 534-468-854</Link>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="md:col-span-6 lg:col-span-4">
                  <div className="lg:ms-8">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Menu
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {menuItems.map((item, index) => {
                        return (
                          <li className="mt-[10px] first:mt-0" key={index}>
                            <Link
                              href={item.url}
                              className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                            >
                              <i className="mdi mdi-chevron-right"></i>{" "}
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-6 lg:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Bản tin
                  </h5>
                  <p className="mt-6">
                    Đăng ký và nhận những tin mới nhất qua email.
                  </p>
                  <form>
                    <div className="grid grid-cols-1">
                      <div className="my-3">
                        <label className="form-label">
                          Email của bạn <span className="text-red-600">*</span>
                        </label>
                        <div className="form-icon relative mt-2">
                          <FiMail className="size-4 absolute top-3 start-4"></FiMail>
                          <input
                            type="email"
                            className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none"
                            placeholder="Email"
                            name="email"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                      >
                        Đăng kí
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="wrapper relative text-center">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <p className="mb-0">
                Copyright &copy; {new Date().getFullYear()} by Lathabird
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
