"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function SimpleSlider() {
  return (
    <div>
      <Carousel
        className=" pt-40 w-full"
        autoPlay={true}
        interval={5000}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        transitionTime={3000}
        showArrows={false}
        swipeable={true}
        dynamicHeight={false}
      >
        <div>
          <img
            src="https://static.wixstatic.com/media/035ab7_f8576b087528445f8e874e35fc7f72f7~mv2.jpg/v1/fill/w_1903,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/035ab7_f8576b087528445f8e874e35fc7f72f7~mv2.jpg"
            className=" h-full"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/035ab7_8fc0993669ec4b99be0780488feaaf68~mv2.jpg/v1/fill/w_1903,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/035ab7_8fc0993669ec4b99be0780488feaaf68~mv2.jpg"
            className="h-full"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/035ab7_207e2a6147194176b2f5a1e721b37fa9~mv2.jpg/v1/fill/w_1903,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/035ab7_207e2a6147194176b2f5a1e721b37fa9~mv2.jpg"
            className="h-full"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/035ab7_98076d0bff5144ba936e0f908b6955a8~mv2.jpg/v1/fill/w_1903,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/035ab7_98076d0bff5144ba936e0f908b6955a8~mv2.jpg"
            className="h-full"
          />
        </div>
      </Carousel>
    </div>
  );
}
