import React from "react"
import styles from "../../styles/Register.module.css"
export function RegisterFooter() {
    return <footer className={styles.reg_footer}>
        <div className={styles.footer_cont_1}>
            <p>Feedback</p>
            <p>FAQs</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Security Advice</p>
            <p>Business News</p>
            <p>Terms & Conditions</p>
            <p>Disclaimer</p>
        </div>
        <div className={styles.footer_cont_2}>
            <p>© 2021 HT Media Limited</p>
        </div>
       
    </footer>
}