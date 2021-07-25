import React from "react"
import styles from "../../styles/Login.module.css"
export function LoginFooter() {
    return <footer className={styles.log_footer}>
     
        <div className={styles.footer_cont_1}>
            <p>Feedback</p>
            <p>FAQs</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Fraud Alert</p>
            <p>Business News</p>
            <p>English News</p>
            <p>Terms & Conditions</p><br/>
            <p>Disclaimer</p>
        </div>
        <div className={styles.footer_cont_2}>
            <p>© 2021 HT Media Limited</p>
        </div>
       
    </footer>
}