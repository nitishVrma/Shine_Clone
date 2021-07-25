import React from "react"
import styles from "../../styles/Login.module.css"
export function LoginNav({home,register,login}) {
    return <nav className={styles.log_navbar}>
            <img onClick={()=>home()} src={process.env.PUBLIC_URL + `NavBar_logo.png`} alt="" />
    </nav>
}