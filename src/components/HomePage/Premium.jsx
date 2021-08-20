import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Premium() {
    return <section className={styles.premium}>
        <div>
            <div className={styles.premium_crown}>
                <div>
                <img src={process.env.PUBLIC_URL + `/premium_crown.png`} alt="" />
                </div>
                <h2 className={styles.premium_title}>Shine Premium</h2></div>
            
            <div className={styles.premium_cont}>
                <h5>Fastrack your job search with our premium services</h5>
                <div className={styles.premium_container}>
                    <div>
                        <img src={process.env.PUBLIC_URL+`/green_tick.png`}alt=""/>
                        <p>Enhanced Profile</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL+`/green_tick.png`} alt=""/>
                        <p>10x higher visibility to recruiters</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL+`/green_tick.png`} alt=""/>
                        <p>Insights on other applicants</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL+`/green_tick.png`} alt=""/>
                        <p>Interview Ready</p>
                    </div>
                </div>
            </div>
            <button className={styles.premium_button}>Get Shine Premium</button>
        </div>
        <div className={styles.premium_img}>
            <img src="https://static1.shine.com/c/s1/images/candidate/new/premiumgraph.png?b7696e502601" alt=""/>
        </div>
    </section>
}