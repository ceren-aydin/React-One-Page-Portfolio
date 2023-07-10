import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FcCallback, FcAddressBook, FcDepartment } from "react-icons/fc";
import './contact.css'

const contact = () => {

    const form = React.createRef();

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                'service_pdzo53c',  //emailjs service id
                'template_5kwkmti', //emailjs service id
                form.current,
                'X_ThxDpCfU6apQwxI') //emailjs public key
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <div className="contact-full">
                <div className="contact-left">
                    <h1 className="contact-title">Benimle İletişime Geçmek İster Misiniz?</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <FcCallback className="contact-icon" />
                            0543 000 00 00
                        </div>
                        <div className="contact-info-item" >
                            <FcAddressBook className="contact-icon" />
                            cerenaydin.ce@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <FcDepartment className="contact-icon" />
                            Ankara / Türkiye
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Adınız" name="user_name"/>
                        <input type="text" placeholder="Konu" name="user_subject" />
                        <input type="text" placeholder="Email Adresiniz" name="user_email" />
                        <textarea rows="5" placeholder="Mesajınızı Yazınız" name="message" />
                        <button>Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact