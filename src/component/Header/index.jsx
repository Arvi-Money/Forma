import React from 'react'
import './index.css'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <>
    <div className="top">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <a href="">Vakansiyalar</a>
        <a href="">Kandidatlar</a>
        <a href="">Kompaniyalar</a>
        <a href="">Xizmatlar</a>
        <a href="">Ta'lim</a>
      </div>
      <div className="sel_btn">
        <select name="lang" id="lang">
          <option value="O'zb">O'zb</option>
          <option value="Rus">Rus</option>
          <option value="Ing">Ing</option>
        </select>
        <button className="btn">Boshlash</button>
      </div>
     </div>
    </>
  )
}

export default Header