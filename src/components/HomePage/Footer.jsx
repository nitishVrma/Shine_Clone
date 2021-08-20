import React from 'react'
import styles from '../../styles/Footer.module.css';

export function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footer_body}>
                <div className={styles.footer_body_top}>
                    <div>
                        <strong>Job seekers</strong>
                        <p>Browse Jobs</p>
                        <p>Job Search</p>
                        <p>Register Now</p>
                        <p>Login</p>
                        <p>Create Free Job Alert</p>
                    </div>
                    <div>
                        <strong>Employers</strong>
                        <p>Recruiter India</p>
                        <p>Post Jobs</p>
                        <p>Access Database</p>
                    </div>
                    <div>
                        <strong>Partner Sites</strong>
                        <p>English Mate</p>
                        <p>Study Mate</p>
                        <p>Hindustantimes.com</p>
                        <p>Livemint.com</p>
                        <p>Livehindustan.com</p>
                    </div>
                    <div>
                        <strong>Contact us</strong>
                        <strong>080-47105555</strong>
                        <p>contactus@shine.com</p>
                        <strong>Follow us</strong>
                        <div className={styles.social_links}>
                            <img src={process.env.PUBLIC_URL + '/lk.png'} alt=""/>
                            <img src={process.env.PUBLIC_URL + '/twitter.png'} alt=""/>
                            <img src={process.env.PUBLIC_URL + '/facebook.png'} alt=""/>
                        </div>
                        
                            <div className={styles.footer_download}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + '/appstore.png'} alt=""/>
                                    <img src={process.env.PUBLIC_URL + '/playstore.png'} alt=""/>
                                </div>
                                <div>Download Shine App</div>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div className={styles.footer_body_bottom}>
                <div>
                    <span>Feedback</span>
                    |
                    <span>FAQs</span>
                    |
                    <span>About Us</span>
                    |
                    <span>Contact Us</span>
                    |
                    <span>Privacy Policy</span>
                    |
                    <span>Fraud Alert</span>
                    |
                    <span>Business news</span>
                    |
                    <span>English News</span>
                    |
                    <span>Terms & Conditions</span>
                    |
                    <span>Discalimer</span>
                    |
                    <span>Report a Job Posting</span>
                </div>
                <div>
                    <span className={styles.footer_body_bottom_right}>&#169; 2020 HT Media Limited</span>
                </div>
            </div>
        </section>
    )
}

