import React from "react"
import styles from "../../styles/ProfilePage.module.css"
export function ProfileContainer({ user }) {
    return <section className={styles.profile_page}>
        <div className={styles.profile_page_container}>
            
            <div className={styles.profile_page_container_top}>
               
                    <div className={styles.profile_page_title}>
                    <h1>Personal</h1>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Name</strong>
                        <p>{user.name}</p>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Email</strong>
                        <p>{user.email}</p>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Mobile no.</strong>
                        <p>+91-{ user.mobile}</p>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Date of Birth</strong>
                        <p>Not Mentioned</p>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Location</strong>
                        <p>Valsad</p>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Gender</strong>
                        <p>Male</p>
                    </div>
                    <div className={styles.profile_page_content}>
                    <strong>Device you own</strong>
                        <p></p>
                    </div>
                <div className={styles.profile_page_img}><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt=""/> </div>
                
            </div>
            
            <div className={styles.profile_page_container_mid}>
                    <div className={styles.profile_page_title}>
                <h1>Work Summary</h1>
                </div>
                <div className={styles.profile_page_content}>
                <strong>Profile Title</strong>
                    <p>Not Mentioned</p>
                </div>
                <div className={styles.profile_page_content}>
                <strong>Profile Summary</strong>
                    <p>Not Mentioned</p>
                </div>
                <div className={styles.profile_page_content}>
                <strong>Total Experience</strong>
                    <p>0 Months</p>
                </div>
            </div>
            <div className={styles.profile_page_container_bottom}>
                <div className={styles.profile_page_title}>
                <h1>Education</h1>
                </div>
                <div className={styles.profile_page_content}>
                <strong>B.E. / B.Tech</strong>
                    <p>Mechanical Engineering</p>
                </div>
            </div>
        </div>
    </section>

}