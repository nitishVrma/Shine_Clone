import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Resume() {
    return <section className={styles.resume}>
        <div className={styles.resume_title}>
       <h1>Having trouble writing your resume?</h1>
        </div>
            <div className={styles.resume_container}>
                <div className={styles.resume_container_left}>
                    <div className={styles.resume_card}>
                        <div>
                            <span>Resume writing</span>
                            <p>Highlight right skills on resume to get noticed by recruiters and hired faster</p>
                            <button className={styles.resume_button}>Get expert help</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/writing.png'} alt=""/>
                    </div>
                    <div className={styles.resume_card}>
                        <div>
                            <span>Resume Builder</span>
                            <p>Build impressive resume instantly with ready to use templates</p>
                            <button className={styles.resume_button}>Build your resume</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/builder.png'} alt=""/>
                    </div>
                </div>
                <div className={styles.resume_container_right}>
                    <img src="https://static1.shine.com/c/s1/images/candidate/new/resume_writing.png" alt=""/>
                </div>
            </div>
    </section>
}