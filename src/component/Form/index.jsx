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

    const validateEmail = (email) =>{
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
    

    function validate(nameRef, emailRef, numberRef, countryRef) {
        if (!nameRef.current.value) {
            nameRef.current.focus();
            alert('Name is empty');
            return false;
        }

        if (!(validateEmail(emailRef.current.value))) {
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
            <label htmlFor="">Kompaniya nomi<span>*</span></label><br />
            <input type="text" placeholder='Kompaniya nomi' ref={nameRef} />

            <label htmlFor="">Email<span>*</span></label>
            <input type="email" placeholder='Email' ref={emailRef}/>

            <label htmlFor="">Telefon raqami<span>*</span></label>
            <input type="number" placeholder='UZ +9989' ref={numberRef}/>

            <label htmlFor="">Linklar<span>*</span></label>
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
                <div className="count">
                    <label htmlFor="">Davlat<span>*</span></label>
                    <input type="text" placeholder='Davlat' ref={countryRef}/>
                </div>
                <div className="city">
                    <label htmlFor="">Shahar<span>*</span></label>
                    <input type="text" placeholder='Shahar' ref={cityRef}/>
                </div>
            </div>

            <label htmlFor="">Yashash joyi<span>*</span></label>
            <input type="text" ref={addressRef} placeholder='Joy'/>

            <label htmlFor="">Hodimlar soni<span>*</span></label>
            <input type="text" placeholder='Hodimlar soni' ref={numofEmployeesRef}/>

            <label htmlFor="">Izoh<span>*</span></label>
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
