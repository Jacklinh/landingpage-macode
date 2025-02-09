'use client'
import { useState } from 'react'
import styles from './Faq.module.css'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const faqData = [
        {
            question: "01. Can I Find the right information faster?",
            answer: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
        },
        {
            question: "02. How to share feature demos and ideas?",
            answer: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
        },
        {
            question: "03. How to get insights from users?",
            answer: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
        },
        {
            question: "04. Can I develop my website without code?",
            answer: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
        }
    ];

    return (
        <section className={styles.secFaq}>
            <div className="container">
                <div className={styles.faqHeading}>
                    <div className="boxHeading text-center">
                        <h2>FAQs</h2>
                    </div>
                    <div className={styles.faqAccordion}>
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.faqAccItem} ${activeIndex === index ? styles.active : ''}`}
                            >
                                <div className={styles.faqAccTtitle} onClick={() => handleClick(index)}>
                                    <button>
                                        {item.question}
                                    </button>
                                </div>
                                <div className={styles.faqAccBody}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq