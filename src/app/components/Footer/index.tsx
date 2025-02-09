'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
const Footer = () => {

  const [isFixed, setIsFixed] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const footerElement = document.querySelector(`.${styles.footer}`);
    if (footerElement) {
      const footerRect = footerElement.getBoundingClientRect();
      if (footerRect.top < window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.boxTry}>
          <h2>Start upgrading your <br />
            skills free for this month</h2>
          <p>Build your site for free and take as long as you need</p>
          <ul className={styles.listTry}>
            <li className='btnOpacity'><a href="javascript:void(0)">Try Yourself</a></li>
            <li className={`${styles.btnTry} btnBlack`}><a href="javascript:void(0)">Get started</a></li>
          </ul>
        </div>
        <div className={styles.footerNavi}>
          <p className={styles.flogo}>
            <a href="javascript:void(0)">Macode</a>
          </p>
          <ul className={styles.listFnavi}>
            <li><a href="javascript:void(0)">Tutorials</a></li>
            <li><a href="javascript:void(0)">Case Studies</a></li>
            <li><a href="javascript:void(0)">Resources</a></li>
          </ul>
        </div>
        <div className={styles.footerShare}>
          <ul className={styles.listSns}>
            <li><a href="javascript:void(0)"><Image src='/images/icon/icon_fb.png' width={12} height={24} alt='facebook' /></a></li>
            <li><a href="javascript:void(0)"><Image src='/images/icon/icon_youtube.png' width={24} height={24} alt='youtube' /></a></li>
            <li><a href="javascript:void(0)"><Image src='/images/icon/icon_in.png' width={24} height={24} alt='' /></a></li>
            <li><a href="javascript:void(0)"><Image src='/images/icon/icon_twitter.png' width={24} height={24} alt='twitter' /></a></li>
            <li><a href="javascript:void(0)"><Image src='/images/icon/icon_mail.png' width={24} height={24} alt='mail' /></a></li>
          </ul>
          <p className={styles.copyright}>© 2021 Copyright. <a href="javascript:void(0)">Macode.io</a></p>
        </div>
        <button onClick={handleBackToTop} className={`${styles.backToTop} ${isFixed ? styles.fixed : ''}`}>
          <Image src='/images/footer/backtop.png' width={46} height={46} alt='back to top' />
        </button>
      </div>
    </footer>
  )
}

export default Footer