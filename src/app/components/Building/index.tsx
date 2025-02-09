
import Image from 'next/image';
import styles from './Building.module.css'
const Building = () => {
    return (
        <>
            <section className={styles.secBuilding}>
                <div className="container">
                    <div className={styles.buildingWrap}>
                        <div className={styles.buildingImage}>
                            <p><Image src='/images/main/building.png' width={707} height={494} alt='' /></p>
                            <p className={styles.buildingIcon}><Image src='/images/icon/icon_park_caution.png' width={195} height={195} alt='' /></p>
                        </div>
                        <div className={styles.buildingCnt}>
                            <div className="boxHeading">
                                <h2>The language for <br />
                                    building web pages
                                </h2>
                                <p className='heading_desc'>Go live on a fast, reliable, and hassle-free<br />
                                    hosting network that scales with your business<br />
                                    with one click and go code!
                                </p>
                                <p className={`${styles.buildingBtn} btnBlack`}><a href="javascript:void(0)">Try it Yourself</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.secRunning}>
                <div className="container">
                    <div className={styles.runningWrap}>
                        <div className={styles.runningCnt}>
                            <div className={`${styles.runningHeading} boxHeading`}>
                                <h2>Get up and running<br /> fast together</h2>
                            </div>
                            <ul className="listRunning">
                                <li>
                                    <div className='featureBox'>
                                        <div className='featureIcon'>
                                            <p><Image src='/images/icon/icon_running01.png' width={44} height={40} alt='' /></p>
                                        </div>
                                        <div className='featureCnt'>
                                            <h3>University</h3>
                                            <p>Browse hundreds of in-depth videos, courses, and guides to get up and running fast
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='featureBox'>
                                        <div className='featureIcon'>
                                            <p><Image src='/images/icon/icon_running02.png' width={32} height={36} alt='' /></p>
                                        </div>
                                        <div className='featureCnt'>
                                            <h3>Showcase</h3>
                                            <p>Get inspired by the incredible websites built by members of the community
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.runningImage}>
                            <p><Image src='/images/main/tutor.png' width={522} height={600} alt='' /></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Building