import { logo } from './constants'
import './App.css'
import Form from './component/Form'
import { useRef } from 'react'

function App() {
 
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

     <Form></Form>
    </>
  )
}

export default App
