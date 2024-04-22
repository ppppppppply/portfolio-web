import React from "react";

export default function Page() {
  return (
    <div>
      <div className="relative text-center w-full h-screen pt-40">
        <div className=" pt-40 absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <div className="text-6xl font-bold">TRAIN TO OASIS</div>
        </div>
        <img
          src="https://static.wixstatic.com/media/035ab7_23869b7e3c5d409cbda6d31cdd2a4b7f~mv2.jpg/v1/fill/w_1620,h_853,fp_0.50_0.50,q_85/035ab7_23869b7e3c5d409cbda6d31cdd2a4b7f~mv2.jpg"
          className=" inset-0 w-full h-full object-cover"
          alt="TRAIN TO OASIS"
        />
      </div>
      <div className="flex flex-col pt-10">
        {/* กลุ่ม1 */}
        <div className="flex flex-row h-[623px] overflow-hidden pb-5">
          <div className="flex w-7/12 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_ec92568248084f6daad4ae6905d04f50~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_ec92568248084f6daad4ae6905d04f50~mv2.webp
              " n
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="TRAIN TO OASIS"
            />
          </div>
          <div className="flex w-5/12 ml-5 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_59d8a511c0e1433c8281131f8c6ac70a~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_59d8a511c0e1433c8281131f8c6ac70a~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="TRAIN TO OASIS"
            />
          </div>
        </div>

        {/* กลุ่ม2 */}
        <div className="flex flex-row h-[623px] overflow-hidden pb-5">
          <div className="flex w-4/12 mr-5 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_f28d54f9f4c143b1b998452092ed6644~mv2.jpg/v1/fit/w_1080,h_763,q_90/035ab7_f28d54f9f4c143b1b998452092ed6644~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="TRAIN TO OASIS"
            />
          </div>
          <div className="flex w-8/12 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_36a05676a6d149698638fbc7f0298216~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_36a05676a6d149698638fbc7f0298216~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="TRAIN TO OASIS"
            />
          </div>
        </div>

        {/* กลุ่ม3 */}
        <div className="flex flex-row h-[623px] overflow-hidden">
          <div className="flex w-1/2 mr-5 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_1acd409ab1cb4e29b4a07e13641c1a8d~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_1acd409ab1cb4e29b4a07e13641c1a8d~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="TRAIN TO OASIS"
            />
          </div>
          <div className="flex w-1/2 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_f8b7a69148774f9588896f63ba41b7b2~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_f8b7a69148774f9588896f63ba41b7b2~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="TRAIN TO OASIS"
            />
          </div>
        </div>


      </div>
    </div>
  );
}