import React from "react"
import styles from "../../styles/NavBar.module.css"

export function NavBar({home,post}) {
    return <nav className={styles.nav}>
            <div className={styles.nav_left}>
            <img style={{cursor:"pointer"}} onClick={()=>{home()}} src={process.env.PUBLIC_URL + "/NavBar_Logo.png"} alt="Logo" className={styles.logo}/>
            <div className={styles.drop_down}>
            <li className={styles.nav_tab}>Search Jobs</li>
            <div className={styles.jobs}>
            <li>Jobs in top cities</li>
            <li>Jobs by Skills</li>
            <li>Jobs by Course</li>
            <li>Jobs by Education</li>
            <li>Jobs by Designation</li>
            <li>Jobs by Companies</li>
            </div>
            </div>

            <div className={styles.drop_down}>
            <li className={styles.nav_tab}>Services</li>
            <div className={styles.services}>
            <li><strong>E-learning</strong></li>
            <li>Digital Marketing</li>
            <li>Data Science</li>
            <li>Cloud Computing</li>
            <li><strong>Resume Service</strong></li>
            <li>Resume Writing</li>
            <li>International Resume</li>
            <li>LinkdeIn Profile Writing</li>
            </div>
            </div>
            
               <div className={styles.drop_down}>
            <li className={styles.nav_tab}>Resources</li>
            <div className={styles.resources}>
            <li>Blog</li>
            <li>Resume Tips</li>
            <li>Career Help</li>
            <li>Career Prospects</li>
            <li>Job Search Guidance</li>
            <li>Interview Tips</li>
            </div>
            </div> 
                
                <li className={styles.nav_tab}>Recruiter</li>
                <li className={styles.nav_tab}>Walk-ins</li>
            <li className={styles.career_guidance}><img src={process.env.PUBLIC_URL + "/Career_bulb.png"  } alt="career"/>Career Guidance</li>
            </div>
            <div className={styles.nav_right}>
                <li>Create job alert</li>
                <li onClick={()=>{post()}}>Post a job</li>
                <div className={styles.nav_right_contact}>
                    <li>080-471055555</li>
                    <li>9am-6pm, Mon to Sat</li>
                </div>
        </div>
        
    </nav>
} 