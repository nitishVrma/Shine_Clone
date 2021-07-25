import React from "react"
import styles from "../../styles/HomePage.module.css"
export function CareerAdvice() {
    return <section className={styles.career_advice}>
        <div className={styles.career_advice_container}>
            <div className={styles.career_advice_title}>
                <h2>Career Advice</h2>
            </div>
            <div className={styles.career_advice_body}>
                <div className={styles.career_advice_card}>
                    <div className={styles.career_advice_img_1}>
                        <h2>Career Help</h2>
                    </div>
                    <div>
                        <p>10 Commonly Asked BPO Interview Questions and Answers</p>
                    </div>
                </div>
                <div className={styles.career_advice_card}>
                    <div className={styles.career_advice_img_2}>
                        <h2>Career Help</h2>
                    </div>
                    <div>
                        <p>How to write Leave Application For Office (With Samples)</p>
                    </div>
                </div>
                <div className={styles.career_advice_card}>
                    <div className={styles.career_advice_img_3}>
                        <h2>Career Help</h2>
                    </div>
                    <div>
                        <p>How to write Marriage Leave Application For Office (With Samples)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}