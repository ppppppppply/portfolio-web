import React from "react";

export default function Page() {
  return (
    <div>
      <div className="relative text-center w-full h-screen pt-40">
        <div className=" pt-40 absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <div className="text-6xl font-bold">THE WATERFALL HOUSE</div>
        </div>
        <img
          src="https://images.adsttc.com/media/images/6613/ef6a/ce8b/1207/0e8c/577b/slideshow/the-waterfall-house-greenbox-design_21.jpg?1712582552"
          className=" inset-0 w-full h-full object-cover"
          alt="THE WATERFALL HOUSE"
        />
      </div>
      <div className=" text-sm p-10 md:p-40 md:pb-10 md:text-xl font-extralight">
        On the crowded 560 square-meter area, approximately 100 meters from the
        Ratchayothin intersection, the context of this land is surrounded by
        apartments, schools, and residences. We questioned how we could design
        this house to be private but yet still connected to the context of the
        main city, considering what would affect the privacy of the house and
        the owner. Due to the living space conditions and the size of the land,
        this house has been designed vertically by necessity. The initial design
        plan was to arrange accessibility, starting from the public area,
        semi-area, and private area. The common area will be placed on the first
        floor, while the second and third floors will mainly serve the family,
        consisting of sleeping rooms and the living room. Given the crowded area
        and noise from traffic, we designed the swimming pool to be situated on
        the second floor as it's the main family space. The response we
        received, aside from the continuous accessibility through the family's
        living room, was the waterfall pouring down to the first floor. The
        slate rock used to build the waterfall helps reduce the annoying sound
        from outside. Additionally, when there are guests on the first floor,
        the sound of this waterfall will equalize the volume, preventing it from
        interrupting the activities of the family above. In consideration of the
        family's privacy and neighbors, we designed a tall and opaque wall on
        the north side adjoining the apartment. Apart from maintaining privacy,
        the wall reflects direct sunlight from the south, turning it into
        indirect light to brighten the family's rooms throughout the day. The
        side that does not adjoin the neighbor is left open, as we still want to
        capture some aspects of the city living context. There are other parts
        of the house where the cityscape can be valued and seen as we desire. We
        constructed straightforward architecture in each of the living areas in
        this house. In the semi-public space, we decided to create a building
        void connected to both internal and external areas clearly. On the
        contrary, the private area will have a massive appearance but still
        provides enough space for clerestory and ventilation. Given the vertical
        characteristic of this house located in a tropical wet zone, we
        discovered a way to ventilate the tropical air mass from inside to
        outside. We introduced a vertical funnel into many parts of the house,
        as naturally, heat will rise due to air pressure. This allows the heat
        to move up into the funnel and be replaced automatically by the air from
        outside. We expect that our intention in questioning and resolving the
        issues in this design will provide comfort for the new residents to
        adjust themselves to the new context of the house. Having learnt from
        the context, we narrated the life of the residents to seamlessly
        integrate with their new surroundings
      </div>
      <div className="flex flex-col">
        {/* กลุ่ม1 */}
        <div className="flex flex-row h-[623px] overflow-hidden pb-5">
          <div className="flex w-7/12 overflow-hidden">
            <img
              src="https://images.adsttc.com/media/images/6613/ef6b/dec8/f008/1739/5565/slideshow/the-waterfall-house-greenbox-design_38.jpg?1712582532"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="THE WATERFALL HOUSE"
            />
          </div>
          <div className="flex w-5/12 ml-5 overflow-hidden">
            <img
              src="https://images.adsttc.com/media/images/6613/ef6a/ce8b/1207/0e8c/577d/slideshow/the-waterfall-house-greenbox-design_37.jpg?1712582587"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="THE WATERFALL HOUSE"
            />
          </div>
        </div>

        {/* กลุ่ม2 */}
        <div className="flex flex-row h-[623px] overflow-hidden pb-5">
          <div className="flex w-4/12 mr-5 overflow-hidden">
            <img
              src="https://images.adsttc.com/media/images/6613/ef6b/ce8b/120f/5d23/2e87/large_jpg/the-waterfall-house-greenbox-design_40.jpg?1712582648"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="THE WATERFALL HOUSE"
            />
          </div>
          <div className="flex w-8/12 overflow-hidden">
            <img
              src="https://images.adsttc.com/media/images/6613/ef6a/ce8b/120b/1a96/cc3d/slideshow/the-waterfall-house-greenbox-design_27.jpg?1712582565"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="THE WATERFALL HOUSE"
            />
          </div>
        </div>

        {/* กลุ่ม3 */}
        <div className="flex flex-row h-[623px] overflow-hidden">
          <div className="flex w-1/2 mr-5 overflow-hidden">
            <img
              src="https://images.adsttc.com/media/images/6613/ef69/ce8b/1207/0e8c/5779/slideshow/the-waterfall-house-greenbox-design_29.jpg?1712582535"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="THE WATERFALL HOUSE"
            />
          </div>
          <div className="flex w-1/2 overflow-hidden">
            <img
              src="https://images.adsttc.com/media/images/6613/ef69/dec8/f004/b356/5e33/slideshow/the-waterfall-house-greenbox-design_34.jpg?1712582529"
              className="w-full h-full object-cover transition-transform ease-out duration-[1.5s] hover:scale-110"
              alt="THE WATERFALL HOUSE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
