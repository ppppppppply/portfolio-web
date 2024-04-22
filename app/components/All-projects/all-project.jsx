import React from "react";
import Link from "next/link";

export default function All_project() {
  return (
    <div className="">
      <div className="flex w-[200px] ">
        <Link
          href="/pages/pageproject"
          className="pt-52 pl-10 font-extralight  text-lg pb-16"
        >
          Back to Portfolio
        </Link>
      </div>
      <div className="pl-10 font-semibold text-3xl pb-20">All projects</div>

      <div class="px-10 pb-8 grid grid-cols-1 md:grid-cols-2 min-[1120px]:grid-cols-3 gap-16">
        <Link
          href="/project/banbanjob"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_4e2af36ebdb9411fbdec8e8b49110a06~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_4e2af36ebdb9411fbdec8e8b49110a06~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">BAN BANJOB</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/waterfall"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_f4422c4e216041e9bad14ade6e9c6250~mv2.jpg/v1/fill/w_1500,h_789,fp_0.50_0.50,q_85/035ab7_f4422c4e216041e9bad14ade6e9c6250~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">THE WATERFALL HOUSE</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/banthaiwan"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_773e3dbed900452ba2038258e5f5be37~mv2.jpg/v1/fill/w_1155,h_608,fp_0.50_0.50,q_85/035ab7_773e3dbed900452ba2038258e5f5be37~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">BAN THAIWAN</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/vcxoffice"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_66cae7bce4024256b3c5544704ddadfa~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_66cae7bce4024256b3c5544704ddadfa~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">VCX OFFICE</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/traintooasis"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_23869b7e3c5d409cbda6d31cdd2a4b7f~mv2.jpg/v1/fill/w_1620,h_853,fp_0.50_0.50,q_85/035ab7_23869b7e3c5d409cbda6d31cdd2a4b7f~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">TRAIN TO OASIS</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/anubarn"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_84df8fa400bb4b32b6efe4b89eadc9ef~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_84df8fa400bb4b32b6efe4b89eadc9ef~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">ANUBARN SUBMARINE</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/banbanjob"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_869c4d2201ef43609603b0e7c2ee8282~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_869c4d2201ef43609603b0e7c2ee8282~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">KUMAMOTO RESIDENCE</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/banbanjob"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_5bb06e23bff947828ccbd0a27751add0~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_5bb06e23bff947828ccbd0a27751add0~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">PRINSIRI</h1>
            </div>
          </div>
        </Link>

        <Link
          href="/project/banbanjob"
          className=" w-full h-[320px] overflow-hidden relative"
        >
          <div
            className="w-full h-full bg-center bg-cover justify-center transition-transform ease-out duration-[1.5s] hover:scale-110"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/035ab7_8bf3797dbf9d4320af1ddbf496afe580~mv2.jpg/v1/fill/w_1900,h_1000,fp_0.50_0.50,q_85/035ab7_8bf3797dbf9d4320af1ddbf496afe580~mv2.jpg")', // ปรับขนาดตามต้องการ
            }}
          >
            <div className=" h-full w-full opacity-0 text-3xl flex text-white absolute justify-start pl-14 transition ease-out duration-[0.5s] hover:opacity-100">
              <h1 className="self-center">BAN NAI PHAN CHUMPORN REFACADE</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
