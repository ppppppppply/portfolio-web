import React from "react";
import Link from "next/link"

export default function Publication() {
  return (
    <div className="h-full pt-40 flex flex-col justify-center">
      <div className=" flex flex-col justify-center">
        <div className=" size-24 rounded-full self-center border-black border overflow-hidden">
          <Link href="https://www.youtube.com/channel/UC5EP27pGco-xRoSHduTBLhQ">
            <img
              src="https://yt3.googleusercontent.com/TXHPn5jsgBq40CA7NiANsTSWLHj6rjU718hX9G36xOYv0ldyIDtncpIwOOTO6WG6kZhgYge7BhM=s176-c-k-c0x00ffffff-no-rj"
              alt="another room"
              className=" object-cover"
            />
          </Link>
        </div>
        <div className=" flex items-center justify-center flex-col md:flex-row pt-6">
          <iframe
            width="375"
            height="247"
            src="https://www.youtube.com/embed/RgWjkRdI8Sw"
            title="บ้านในเมือง ที่สร้างสภาวะแวดล้อม ด้วยน้ำตกส่วนตัว | ANOTHER ROOM 2023 EP.09 THE WATERFALL HOUSE"
          ></iframe>
          <iframe
            width="375"
            height="247"
            src="https://www.youtube.com/embed/RaQzfv3an_E"
            title="บ้านโมเดิร์นสีดำ ที่ตกแต่งภายในด้วยวัสดุที่อบอุ่น | ANOTHER ROOM 2023 EP.03 WARM BLACK HOUSE"
          ></iframe>
        </div>
      </div>

      <div className=" flex flex-col justify-center pt-10">
        <div className=" size-24 rounded-full self-center border-black border overflow-hidden">
          <Link href="https://www.youtube.com/channel/UC5EP27pGco-xRoSHduTBLhQ">
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_lt47-CGhgghOxVjg-pcph9fZGppNVnDhI5Hwge3CPhF7M=s176-c-k-c0x00ffffff-no-rj"
              alt="Gapthanavate"
              className=" object-cover"
            />
          </Link>
        </div>
        <div className=" flex flex-col md:flex-row items-center  justify-center pt-6">
          <iframe
            width="375"
            height="247"
            src="https://www.youtube.com/embed/hj_wh4etAic"
            title="Waterfall house : บ้านแนวตั้ง 3 ชั้นกลางเมืองที่มีปล่องอากาศกลางบ้าน (ENG. SUB.)"
          ></iframe>
          <iframe
            width="375"
            height="247"
            src="https://www.youtube.com/embed/T-P4NqO0tl8"
            title="Baan Banjob : บ้านครอบครัวขยายหลายเจนที่ถูกออกแบบให้มีจุดร่วมที่มาบรรจบกันตรงกลาง (ENG. SUB.)"
          ></iframe>
        </div>
      </div>

      <div className=" flex flex-col justify-center pt-10">
        <div className=" size-24 rounded-full self-center border-black border overflow-hidden">
          <Link href="https://www.youtube.com/channel/UCzMoibQRslh_1bTuW0YXc6A">
            <img
              src="https://yt3.googleusercontent.com/s0wvsZX0V6A7zKWg_D550gUJe0CJc3Am8NITr2hZHXk8pBWjI4nVQmTyO0EeokM7y9wLFqdzUg=s176-c-k-c0x00ffffff-no-rj"
              alt="Gapthanavate"
              className=" object-cover"
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className=" flex flex-col md:flex-row items-center  justify-center pt-6">
            <iframe
              width="375"
              height="247"
              src="https://www.youtube.com/embed/BYbm6-R-Tgo"
              title="บ้านและสวน | บ้าน | บ้าน คิด ต่าง"
            ></iframe>
            <iframe
              width="375"
              height="247"
              src="https://www.youtube.com/embed/s4oXzDQq5qQ"
              title="บ้านและสวน | EP.4 | วันที่ 1 มี.ค.63 Full EP"
            ></iframe>
          </div>
          <div className=" flex flex-col md:flex-row items-center  justify-center pt-0 md:pt-6">
            <iframe
              width="375"
              height="247"
              src="https://www.youtube.com/embed/v42i0RktQ1M"
              title="บ้านและสวน | บ้าน | NASS House"
            ></iframe>
            <iframe
              width="375"
              height="247"
              src="https://www.youtube.com/embed/a8nvO_wD_HY"
              title="บ้านและสวน | บ้าน | บ้าน ไท วาน"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
