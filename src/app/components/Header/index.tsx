'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

type Language = {
    code: string;
    name: string;
    icon: string;
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState<Language>({
        code: 'en',
        name: 'English',
        icon: '/images/header/icon_en.png'
    });
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: Language[] = [
        {
            code: 'en',
            name: 'English',
            icon: '/images/header/icon_en.png'
        },
        {
            code: 'vi',
            name: 'Việt Nam',
            icon: '/images/header/icon_vi.png'
        }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Thêm class để ngăn scroll khi menu mobile mở
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    // Cleanup effect khi component unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
    const handleLanguageChange = (lang: Language) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <header className={styles.header} id='tmp_header'>
            <div className='container'>
                <div className={styles.headerWrap}>
                    <div className={styles.hlogo}>
                        <Image src='/images/header/hlogo.png' width={32} height={32} alt='macode' />
                        <span>macode</span>
                    </div>
                    <ul className={`${styles.hnavi} ${isMenuOpen ? styles.active : ''}`}>
                        <li className={styles.hnavi01}><a href="javascript:void(0)">Tutorials</a></li>
                        <li className={styles.hnavi02}><a href="javascript:void(0)">Case studies</a></li>
                        <li className={styles.hnavi03}><a href="javascript:void(0)">Resources</a></li>
                    </ul>
                    <div className={styles.langSelect} ref={dropdownRef}>
                        <button
                            className={styles.langBtn}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Image
                                src={selectedLang.icon}
                                width={21}
                                height={21}
                                alt={selectedLang.code}
                            />
                            <span>{selectedLang.code}</span>
                            <Image
                                src="/images/header/icon_arrow_up.png"
                                width={10}
                                height={6}
                                alt=""
                                className={`${styles.arrowLang} ${isOpen ? styles.active : ''}`}
                            />
                        </button>
                        {isOpen && (
                            <div className={styles.langDropdown}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`${styles.langOption} ${selectedLang.code === lang.code ? styles.active : ''}`}
                                        onClick={() => handleLanguageChange(lang)}
                                    >
                                        <Image
                                            src={lang.icon}
                                            width={21}
                                            height={21}
                                            alt={lang.code}
                                        />
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        className={`${styles.menuBtn} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
