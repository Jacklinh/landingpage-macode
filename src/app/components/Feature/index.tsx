'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './Feature.module.css'
const Feature = () => {
    return (
        <section className={styles.secFeature}>
            <div className={styles.featureWrap}>
                <div className={styles.featureHeading}>
                    <div className="boxHeading">
                        <h2>Our Features <br />
                            Special For You
                        </h2>
                        <p className='heading_desc'>We provide various special <br />
                            features for all of you</p>
                    </div>
                </div>
                <div className={styles.featureSwipper}>
                    <Swiper autoplay={{ delay: 1500, disableOnInteraction: false }} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2.5 } }} spaceBetween={38} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]}>
                        <SwiperSlide>
                            <a className='featureBox' href='javascript:void(0)'>
                                <p className='featureIcon'>
                                    <Image src='/images/icon/icon_feature01.png' width={40} height={40} alt='' />
                                </p>
                                <div className='featureCnt'>
                                    <h3>Best Tutors</h3>
                                    <p>Bring your design <br />
                                        vision to life in clean, <br />
                                        semantic HTML5
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className='swiper-item  featureBox' href='javascript:void(0)'>
                                <p className='featureIcon'>
                                    <Image src='/images/icon/icon_feature02_active.png' width={40} height={40} alt='' />
                                </p>
                                <div className='featureCnt'>
                                    <h3>Flexible</h3>
                                    <p>Connect your <br />
                                        marketing tools with <br />
                                        built-in integrations
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className='featureBox' href='javascript:void(0)'>
                                <p className='featureIcon'>
                                    <Image src='/images/icon/icon_feature03.png' width={40} height={40} alt='' />
                                </p>
                                <div className='featureCnt'>
                                    <h3>Easy Access</h3>
                                    <p>Connect your <br />
                                        marketing tools with <br />
                                        built-in integrations
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className='featureBox' href='javascript:void(0)'>
                                <div className='featureIcon'>
                                    <p><Image src='/images/icon/icon_feature01.png' width={40} height={40} alt='' /></p>
                                </div>
                                <div className='featureCnt'>
                                    <h3>Best Tutors</h3>
                                    <p>Bring your design <br />
                                        vision to life in clean, <br />
                                        semantic HTML5
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Feature