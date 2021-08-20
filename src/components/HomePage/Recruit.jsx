import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Recruit() {
    return <section className={styles.recruit}>
        <div className={styles.recruit_title}>
					<h2>Recruit smart, recruit right</h2>
				</div>
          <div className={styles.recruit_container}>
            <div>
                <span><img src={process.env.PUBLIC_URL+`/id.png`} alt=""/></span>
                <p>Over 3.4 crore</p>
                <p>qualified candidates</p>
            </div>
            <div>
                <span><img src={process.env.PUBLIC_URL+`/bag.png`} alt=""/></span>
            <p>Get smart responses with unique</p>
            <p>two-way matching technology</p>
            </div>
            <div>
                <span><img src={process.env.PUBLIC_URL+`/thumbsup.png`} alt=""/></span>
                 <p>Highlight your company as a</p>
                 <p>great place to work </p>       
            </div>
				</div>

				<div className={styles.recruit_button}>
					<button>Post a job almost free</button>
				</div> 
    </section>
}