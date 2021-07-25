import React from "react"
import styles from "../../styles/Register.module.css"
export function RegisterDisclamer() {
    return <section className={styles.reg_disclamer}>
        <div className={styles.disclamer}>
            <p>By registering, you agree to our <span>terms & conditions</span> & <span>privacy policy.</span></p>
            <p>You hereby authorize Shine.com and/or its representatives to call you, e-mail you, or SMS you. This consent will supersede any registration for any Do Not Call (DNC) / National Do Not Call (NDNC).</p>
    </div>
    </section>
}