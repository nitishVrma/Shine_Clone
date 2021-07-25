import React from "react"
import styles from "../../styles/HomePage.module.css"
export function WhyShine() {
    return <section className={styles.why_shine}>
            <h2>Why Shine</h2>
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/cand_icon.png'} alt=""/>
                    <div>
                    <span>3.4 crores+</span>
                    <p>Candidates</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/jobs_icon.png'} alt=""/>
                    <div>
                    <span>300,000+</span>
                    <p>Jobs</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/comp_icon.png'} alt=""/>
                    <div>
                    <span>15,000+</span>
                    <p>Companies</p>
                    </div>
                </div>
            </div>
    </section>
}