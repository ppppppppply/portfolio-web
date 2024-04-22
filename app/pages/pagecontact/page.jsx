import React from 'react'
import Menubar from '../../components/Nav/menubar'
import Footer from '../../components/Footer/footer'
import StyledMapSelection from '../../components/Map/Mapcomponent'
import Contact from '../../components/Contact/contact'

export default function page() {
  return (
    <div>
      <Contact />
      <StyledMapSelection apiKey={"AIzaSyDk0jKxnbTj1pOZVLd7X03Po6ZB_Wn2Hlg"} />
    </div>
  )
}
