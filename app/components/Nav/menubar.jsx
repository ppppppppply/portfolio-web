"use client";
import React, { useState } from "react";
import Link from "next/link";

import { FiAlignJustify } from "react-icons/fi";

export default function Menubar() {
  const [drop, setDrop] = useState(false);

  return (
    <nav className="fixed z-50 h-40 w-screen bg-white px-10 overflow-hidden">
      <div className="flex items-center justify-between pt-6">
        <Link href="/" className="text-2xl font-semibold">
          GREENBOX DESIGN
        </Link>
        <div className="flex h-10 items-center">
          <ul className="hidden lg:flex space-x-10 font-light text-xs pr-12">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages/pageproject" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/pages/pagepublication" className="">
                Publication
              </Link>
            </li>
            <li>
              <Link href="/pages/pagecontact" className="">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex lg:hidden pb-1 pr-5 relative">
            <button className="flex lg:hidden" onClick={() => setDrop(!drop)}>
              <FiAlignJustify />
            </button>
            <div
              className={`absolute mt-5 ${
                drop ? "visible opacity-100" : "invisible opacity-0"
              } transition-all duration-500 ease-in-out`}
            >
              <div className="hover:border border-black">
                <Link href="/" className=" text-sm">
                  Home
                </Link>
              </div>
              <div className="hover:border border-black">
                <Link href="/pages/pageproject" className="text-sm">
                  Projects
                </Link>
              </div>
              <div className="hover:border border-black">
                <Link href="/pages/pagepublication" className="text-sm">
                  Publication
                </Link>
              </div>
              <div className="hover:border border-black">
                <Link href="/pages/pagecontact" className="text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className=" mb-1 mr-1 md:mr-5 lg:mr-10 size-5">
            <Link
              href="https://www.facebook.com/greenboxdesignbkk">
              <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/alt_text_label_Facebook.png" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
