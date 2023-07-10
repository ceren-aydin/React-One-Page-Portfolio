import React from 'react'
import './intro.css'
import coder from '../../images/coder.jpg'


const intro = () => {
    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-left-full">
                    <h2 className="intro-intro">Merhaba Benim Adım</h2>
                    <h2 className="intro-name">Ceren AYDIN</h2>
                    <div className='intro-title'>
                        <div className='intro-title-full'>
                            <div className="intro-title-item">Web Geliştirme</div>
                            <div className="intro-title-item">Mobil Uygulama Geliştirme</div>
                            <div className="intro-title-item">Yazılım Testi</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        Web Geliştirme, Mobil Uygulama Geliştirme ve Yazılım Testi alanlarına ilgi duymakta ve
                        bu alanlarda çalışmalar yaparak kendimi geliştirmekten zevk almaktayım.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <img
                        src={coder}
                        alt=""
                        className="about-img"
                    />
            </div>
        </div>
    )
}

export default intro