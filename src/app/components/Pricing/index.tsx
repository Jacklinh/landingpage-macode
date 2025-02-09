
import styles from './Pricing.module.css'
const Pricing = () => {
    return (
        <section className={styles.secPricing}>
            <div className="container">
                <div className={styles.pricingHeading}>
                    <div className="boxHeading text-center">
                        <h2>Choose your package</h2>
                        <p className="headingDesc">We provide various types of packages just for you</p>
                    </div>
                </div>
                <ul className={styles.listPricing}>
                    <li>
                        <div className={styles.boxPricing}>
                            <p className={styles.pricingName}>DEVELOPMENT</p>
                            <p className={styles.price}><sup>$</sup><span>10</span></p>
                            <ul className={styles.pricingCheck}>
                                <li>1 Module Javascript</li>
                                <li>1 Module Human Resources</li>
                            </ul>
                            <p className={`${styles.pricingBtn} btnWhite`}><a href="javascript:void(0)">Buy Now</a></p>
                        </div>
                    </li>
                    <li className={styles.pricingNew}>
                        <div className={styles.boxPricing}>
                            <p className={styles.pricingName}>IT & SOFTWARE</p>
                            <p className={styles.price}><sup>$</sup><span>30</span></p>
                            <ul className={styles.pricingCheck}>
                                <li>1 Module Javascript</li>
                                <li>1 Module Human Resources</li>
                                <li>2 Module Sales Teams</li>
                                <li>Pack Marketing Skills</li>
                                <li>5 Module Study Case</li>
                            </ul>
                            <p className={`${styles.pricingBtn} btnWhite`}><a href="javascript:void(0)">Buy Now</a></p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.boxPricing}>
                            <p className={styles.pricingName}>BUSINESS</p>
                            <p className={styles.price}><sup>$</sup><span>30</span></p>
                            <ul className={styles.pricingCheck}>
                                <li>1 Module Javascript</li>
                                <li>1 Module Human Resources</li>
                                <li>2 Module Sales Teams</li>
                            </ul>
                            <p className={`${styles.pricingBtn} btnWhite`}><a href="javascript:void(0)">Buy Now</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Pricing