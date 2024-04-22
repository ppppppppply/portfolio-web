import React from 'react'

export default function Contact() {
  return (
    <main className=' pt-40 flex flex-col md:flex-row w-full md:h-[800px] px-0 md:px-20'>

      <div className=' bg-zinc-50 h-full w-full md:w-1/2 px-10 text-center pt-14 '>
        <div className=' text-4xl'><h1>Contact Us</h1></div>
        <div className='pt-3'><p className=' text-sm font-light pt-5'>503/36 SoiVibhavadi42 yak4-4 Ladyao Chatuchak</p></div>
        <div className='pt-7'><a
          href="mailto:greenbox113@gmail.com"
          className="text-sm font-light"
        >
          greenbox113@gmail.com
        </a></div>
        <div className='pt-7'><p className=' font-light text-sm'>6620050420</p></div>
      </div>
      <div className=' bg-zinc-50 w-full md:w-1/2 h-full px-10 2xl:px-56 pt-14 flex-row'>
        <div>
            <div>ชื่อ *</div>
            <input type="text" id="fname" name="fname" placeholder='กรอกชื่อของคุณ' className=' bg-transparent w-full p-2 border-b border-black hover:border'></input>
        </div>
        <div className=' pt-2'>
            <div>อีเมล *</div>
            <input type="text" id="fname" name="fname" placeholder='กรอกอีเมลของคุณ' className=' bg-transparent w-full p-2 border-b border-black hover:border'></input>
        </div>
        <div className=' pt-2'>
            <div>โทรศัพท์</div>
            <input type="text" id="fname" name="fname" placeholder='กรอกหมายเลขโทรศัพท์' className=' bg-transparent w-full p-2 border-b border-black hover:border'></input>
        </div>
        <div className=' pt-2'>
            <div>ที่อยู่</div>
            <input type="text" id="fname" name="fname" placeholder='ใส่ที่อยู่' className=' bg-transparent w-full p-2 border-b border-black hover:border'></input>
        </div>
        <div className=' pt-2'>
            <div>หัวข้อ</div>
            <input type="text" id="fname" name="fname" placeholder='พิมพ์หัวข้อ' className=' bg-transparent w-full p-2 border-b border-black hover:border'></input>
        </div>
        <div className=' pt-2'>
            <div>เรื่อง</div>
            <input type="text" id="fname" name="fname" placeholder='พิมพ์ข้อความของคุณที่นี่...' className=' bg-transparent w-full p-2 pb-12 border-b border-black hover:border'></input>
        </div>
        <div className=' flex bg-black text-white text-center w-full h-11 justify-center mt-4'><div className=' self-center'>ส่ง</div></div>
      </div>
    </main>
  )
}
