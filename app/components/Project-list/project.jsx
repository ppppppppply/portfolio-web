import React from "react";
import Link from "next/link";

export default function Project() {
  return (
    <div>
      <div class=" pt-56 px-10 pb-8 grid grid-cols-1 md:grid-cols-2 min-[1120px]:grid-cols-3 gap-16">
        <div class="flex relative text-center">
          <Link href="/pages/pageAllproject">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 opacity-100 hover:opacity-0">
              <span class="text-white text-lg font-medium">All projects</span>
            </div>
            <img src="https://static.wixstatic.com/media/035ab7_6fc5ca554e89407c9da454a87127ed2c~mv2.jpg/v1/fill/w_1201,h_632,fp_0.50_0.50,q_85/035ab7_6fc5ca554e89407c9da454a87127ed2c~mv2.jpg" />
          </Link>
        </div>

        <div class="flex relative text-center">
          <Link href="/pages/pageAllproject">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 opacity-100 hover:opacity-0">
              <span class="text-white text-lg font-medium">
                Private residence
              </span>
            </div>
            <img src="https://images.adsttc.com/media/images/65ae/8c7d/e32f/dc55/66b6/f529/slideshow/warmblack-house-greenbox-design_6.jpg?1705938095" />
          </Link>
        </div>

        <div class="flex relative text-center">
          <Link href="/pages/pageAllproject">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 opacity-100 hover:opacity-0">
              <span class="text-white text-lg font-medium">Office</span>
            </div>
            <img src="https://static.wixstatic.com/media/035ab7_66cae7bce4024256b3c5544704ddadfa~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_66cae7bce4024256b3c5544704ddadfa~mv2.jpg" />
          </Link>
        </div>

        <div class="flex relative text-center">
          <Link href="/pages/pageAllproject">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 opacity-100 hover:opacity-0">
              <span class="text-white text-lg font-medium">Library</span>
            </div>
            <img src="https://static.wixstatic.com/media/035ab7_84df8fa400bb4b32b6efe4b89eadc9ef~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_84df8fa400bb4b32b6efe4b89eadc9ef~mv2.jpg" />
          </Link>
        </div>

        <div class="flex relative text-center">
          <Link href="/pages/pageAllproject">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 opacity-100 hover:opacity-0">
              <span class="text-white text-lg font-medium">Residential</span>
            </div>
            <img src="https://static.wixstatic.com/media/035ab7_c590a578d9cc40e09c0ed710a6c5c25c~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/035ab7_c590a578d9cc40e09c0ed710a6c5c25c~mv2.jpg" />
          </Link>
        </div>

        <div class="flex relative text-center">
          <Link href='/pages/pageAllproject'>
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 opacity-100 hover:opacity-0">
              <span class="text-white text-lg font-medium">
                Interior projects
              </span>
            </div>
            <img src="https://static.wixstatic.com/media/035ab7_43b539a9401f4979b607f80d777a164e~mv2.jpg/v1/fill/w_1920,h_1011,fp_0.50_0.50,q_85/035ab7_43b539a9401f4979b607f80d777a164e~mv2.jpg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
