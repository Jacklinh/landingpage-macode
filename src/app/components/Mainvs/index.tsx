
import Image from 'next/image'
import styles from './Mainvs.module.css'
const Mainvs = () => {
    return (
        <div className={styles.secMainvs}>
            <div className={styles.mainvsContent}>
                <h1>Improve your <br /> skills by <Image src='/images/icon/icon_code.png' width={34} height={34} alt='code' className={styles.imgCode} /> study <br /> with coding </h1>
                <p className={styles.lineDesc}><Image src='/images/main/line_desc.png' width={83} height={75} alt='' /></p>
                <p className={styles.mainvsDesc}>Create, launch, and iterate on new <br /> marketing campaigns without distracting <br /> your product team.</p>
                <p className={`${styles.btnMainvs} btnBlack`}><a href="javascript:void(0)">Get started</a></p>
            </div>
            <div className={styles.mainvsBanner}>
                <p className={styles.mainvsCode}><Image src='/images/main/mainvs_code.png' width={634} height={465} alt='' /></p>
                <p className={styles.mainvsAvatar}><Image src='/images/main/avatar.png' width={516} height={752} alt='avatar' /></p>
                <p className={styles.mainvsName}><Image src='/images/icon/icon_radio.png' width={30} height={31} alt='' /><span>· Name (Skill)</span></p>
            </div>
        </div>
    )
}
export default Mainvs