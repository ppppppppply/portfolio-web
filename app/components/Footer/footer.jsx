import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className='w-full'>
      <div className="flex flex-col items-center py-10 text-center">
        <p className=" font-extralight text-xl">
          Greenbox design company limited
        </p>
        <Link
          href="mailto:greenbox113@gmail.com"
          className=" py-6 font-light text-sm"
        >
          greenbox113@gmail.com
        </Link>
        <Link href="https://www.facebook.com/greenboxdesignbkk">
          <div className="">
            <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/alt_text_label_Facebook.png" />
          </div>
        </Link>
        <p className=" pt-12 font-light text-sm">
          ©2023 โดย Greenbox design company limited
        </p>
      </div>
    </footer>
  );
}
