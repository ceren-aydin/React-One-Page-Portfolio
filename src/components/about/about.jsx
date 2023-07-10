import React from 'react'
import './about.css'
import cerenaydin from '../../images/cerenaydin.jpg'
import js from '../../images/javascript.jpg'
import react from '../../images/react.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import java from '../../images/java.png'

const about = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img
                        src={cerenaydin}
                        alt=""
                        className="about-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">Hakkımda</h1>
                <p className="about-subtitle">
                    Bilgisayar Mühendisi & Front-End Developer
                </p>
                <p className="about-description">
                    Merhaba, Fırat Üniversitesi Bilgisayar Mühendiliği'nden mezun olmuş ve
                    Front-End alanında çalışmaktan zevk alan bir geliştiriciyim.
                </p>
                <div className="about-skil">
                    <h2 className="about-skil-description">
                        Yazılım Bilgilerim
                    </h2>
                    <a href="https://tr.wikipedia.org/wiki/JavaScript" target="_blank"> <img src={js} className="about-skils" /> </a>
                    <a href="https://tr.wikipedia.org/wiki/React" target="_blank"> <img src={react} className="about-skils" /> </a>
                    <a href="https://tr.wikipedia.org/wiki/HTML" target="_blank"> <img src={html} className="about-skils" /> </a>
                    <a href="https://tr.wikipedia.org/wiki/CSS" target="_blank"> <img src={css} className="about-skils" /> </a>
                    <a href="https://tr.wikipedia.org/wiki/Java (programlama dili)" target="_blank"> <img src={java} className="about-skils" /> </a>
                </div>
            </div>
        </div>
    )
}

export default about