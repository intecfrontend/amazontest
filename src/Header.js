import React from 'react'
import amazon from "./logopic/amazon.png"

function Header() {
  return (
    <div>
      <img class="logo" src={amazon} alt="logopic" />
    </div>
  )
}

export default Header