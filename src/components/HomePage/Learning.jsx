import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Learning() {
    return <section className={styles.learning}>
        <div className={styles.learning_container}>
        <div className={styles.learning_container_left}>
            <img src={process.env.PUBLIC_URL + '/learning.png'} alt=""/>
            <h2>Want to make your career future ready?</h2>
            <h3>Upgrade your skills, give your career a boost</h3>
            <button>Explore courses</button>
            </div>
            <div className={styles.learning_container_right}>
                <div>
                    <img src="https://www.hindustantimes.com/res/images/logo.png" alt="" />
                    <p>Don't Miss</p>
                    
                        <p>View More</p>
                    
                </div>
                <span className={styles.learning_news_card}>
                    <h2>Join Indian Army 2021: Apply for Officer posts on jointerritorialarmy.gov.in</h2>
                    <p>20 July, 12:36 PM</p>
                </span>
                <span className={styles.learning_news_card}>
                    <h2>JKSSB Recruitment 2021: Apply for 329 vacancies, check details here</h2>
                    <p>19 July, 09:50 PM</p>
                </span>
                <span className={styles.learning_news_card}>
                    <h2>IIT Dhanbad to recruit 73 junior assistants, graduates eligible to apply</h2>
                    <p>18 July, 07:41 PM</p>
                </span>
            </div>
        </div>
    </section>
}