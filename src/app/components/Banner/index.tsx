
import Image from 'next/image'
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <section className={styles.secBanner}>
            <div className="container">
                <ul className={styles.listBanner}>
                    <li>
                        <p><a href="javascript:void(0)"><Image src='/images/main/banner01.png' width={203} height={123} alt='edx' /></a></p>
                    </li>
                    <li>
                        <p><a href="javascript:void(0)"><Image src='/images/main/banner02.png' width={335} height={49} alt='coursera' /></a></p>
                    </li>
                    <li>
                        <p><a href="javascript:void(0)"><Image src='/images/main/banner03.png' width={335} height={126} alt='udemy' /></a></p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Banner