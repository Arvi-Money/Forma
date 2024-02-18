import React from 'react'
import './index.css'
import { useRef } from 'react'
import { img } from '../../constants/index';
import { internet } from '../../constants/index';
import { instagram } from '../../constants/index';
import { telegram } from '../../constants/index';
import { facebook } from '../../constants/index';
import { github } from '../../constants/index';

function Form() {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef(0);
    const countryRef = useRef('');
    const cityRef = useRef('');
    const addressRef = useRef('');
    const numofEmployeesRef = useRef('');
    const descRef = useRef('');  

    function validate(nameRef, emailRef, numberRef, countryRef) {
        if (!nameRef.current.value) {
            nameRef.current.focus();
            alert('Name is empty');
            return false;
        }

        if (!emailRef.current.value) {
            emailRef.current.focus();
            alert('Email is empty');
            return false;
        }

        if (!numberRef.current.value) {
            numberRef.current.focus();
            alert('Phone number is empty');
            return false;
        }

        if (!countryRef.current.value) {
            countryRef.current.focus();
            alert('Country is empty');
            return false;
        }
        

        return true
    }

    function handleClick(e) {
        e.preventDefault();
        if(validate(nameRef, emailRef, numberRef, countryRef)){
            console.log('Validatsiyadan otdi');
        }
    }

  return (
    <div className='form'>
        <h1>Kompaniya ma'lumotlari</h1>
        <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
        <div className="img">
            <img src={img} alt="" />
            <p>Yuklash</p>
        </div>

        <form>
            <label htmlFor="">Kompaniya nomi*</label><br />
            <input type="text" placeholder='Kompaniya nomi' ref={nameRef} />

            <label htmlFor="">Email*</label>
            <input type="email" placeholder='Email' ref={emailRef}/>

            <label htmlFor="">Telefon raqami*</label>
            <input type="number" placeholder='UZ +9989' ref={numberRef}/>

            <label htmlFor="">Linklar*</label>
            <div className="links">
                <div className="icon">
                    <img src={internet} alt="ss" />
                </div>
                <div className="icon">
                    <img src={instagram} alt="ss" />
                </div>
                <div className="icon">
                    <img src={telegram} alt="ss" />
                </div>
                <div className="icon">
                    <img src={facebook} alt="ss" />
                </div>
                <div className="icon">
                    <img src={github} alt="ss" />
                </div>
            </div>

            <div className="count_city">
                <label htmlFor="">Davlat*</label>
                <input type="text" placeholder='Davlat' ref={countryRef}/>

                <label htmlFor="">Shahar*</label>
                <input type="text" placeholder='Shahar' ref={cityRef}/>
            </div>

            <label htmlFor="">Yashash joyi*</label>
            <input type="text" ref={addressRef}/>

            <label htmlFor="">Hodimlar soni*</label>
            <input type="text" placeholder='Hodimlar soni' ref={numofEmployeesRef}/>

            <label htmlFor="">Izoh*</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Kompaniya haqida izoh qoldiring' ref={descRef}></textarea>

            <div className="btns">
                <button className="btn back">ORTGA</button>
                <button className="btn forward" onClick={handleClick}>KEYINGISI</button>
            </div>
        </form>
    </div>
  )
}

export default Form
