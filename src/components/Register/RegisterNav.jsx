import React from "react"
import styles from "../../styles/Register.module.css"
export function RegisterNav({ home,register,login}) {
    return <nav className={styles.reg_navbar}>
        <img onClick={ ()=>home()} src={process.env.PUBLIC_URL + `NavBar_logo.png`} alt="" />
        <button onClick={ ()=>login()}>Login</button>
    </nav>
}