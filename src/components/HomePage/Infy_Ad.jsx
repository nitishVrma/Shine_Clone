import React from "react"
import styles from "../../styles/HomePage.module.css"
export function InfyAd() {
    return <section className={styles.infy_ad}>
            <div>
                <img src={process.env.PUBLIC_URL+`/ad_infy.png`}alt="ad"/>
            </div>
    </section>
}