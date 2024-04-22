import React from "react";

export default function Page() {
  return (
    <div>
      <div className="relative text-center w-full h-screen pt-40">
        <div className=" pt-40 absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <div className="text-6xl font-bold">VCX OFFICE</div>
        </div>
        <img
          src="https://static.wixstatic.com/media/035ab7_66cae7bce4024256b3c5544704ddadfa~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_66cae7bce4024256b3c5544704ddadfa~mv2.jpg"
          className=" inset-0 w-full h-full object-cover"
          alt="VCX OFFICE"
        />
      </div>

      
      <div className="flex flex-col">
        {/* กลุ่ม1 */}
        <div className="flex flex-row h-[623px] overflow-hidden pb-5 pt-10 justify-end">
          <div className="flex w-7/12 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_77363b3b849d4cd9afe856cbe2b2ae66~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_77363b3b849d4cd9afe856cbe2b2ae66~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="VCX OFFICE"
            />
          </div>
        </div>

        <div className="flex flex-row h-[623px] overflow-hidden pb-5">
        <div className="flex w-7/12 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_f48e0c3697574f67aa2c605a37af9d41~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_f48e0c3697574f67aa2c605a37af9d41~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="VCX OFFICE"
            />
          </div>
        </div>

        {/* กลุ่ม2 */}
        <div className="flex flex-row h-[623px] overflow-hidden pb-5 justify-center">
          <div className="flex w-5/12 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/035ab7_74b1eefbd60348aebc043507c7f7312c~mv2.jpg/v1/fit/w_1164,h_763,q_90/035ab7_74b1eefbd60348aebc043507c7f7312c~mv2.webp"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="VCX OFFICE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}