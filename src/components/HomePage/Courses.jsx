import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Courses() {
    return <section className={styles.courses}>
        <div className={styles.courses_title}>
        <h2>Our best selling Courses</h2>
        </div>
        <div className={styles.courses_container}>
            <div className={styles.courses_card}>
                <div className={styles.courses_card_title}>
                    <h3>Microsoft Excel for Data Analyst</h3>
                    <p>85 people bought</p>
                    <p><span>39195</span> jobs available</p>
                </div>
                <div className={styles.courses_card_img}>
                    <img src="https://static1.shine.com/l/m/product_image/images_all/1513320216_4884.png" alt=""/>
                </div>
            </div>
            <div className={styles.courses_card}>
                <div className={styles.courses_card_title}>
                    <h3>Learn Six Sigma Expert Combo(GB + BB)</h3>
                    <p>325 people bought</p>
                    <p><span>10914</span> jobs available</p>
                </div>
                <div className={styles.courses_card_img}>
                    <img src="https://static1.shine.com/l/m/product_image/images_all/1536737243_2955.png" alt=""/>
                </div>
            </div>
            <div className={styles.courses_card}>
                <div className={styles.courses_card_title}>
                    <h3>Data Science & Machine Learning with Python</h3>
                    <p>57 people bought</p>
                    <p><span>38309</span> jobs available</p>
                </div>
                <div className={styles.courses_card_img}>
                    <img src="https://static1.shine.com/l/m/product_image/images_all/1541158456_9921.png" alt=""/>
                </div>
            </div>
            <div className={styles.courses_card}>
                <div className={styles.courses_card_title}>
                    <h3>AI & Deep Learning with Tensor Flow</h3>
                    <p>7 people bought</p>
                    <p><span>8688</span> jobs available</p>
                </div>
                <div className={styles.courses_card_img}>
                    <img src="https://static1.shine.com/l/m/product_image/images_all/1549266081_7610.png" alt=""/>
                </div>
            </div>
            <div className={styles.courses_card}>
                <div className={styles.courses_card_title}>
                    <h3>GST Practitioner Certification Course</h3>
                    <p>350 people bought</p>
                    <p><span>14733</span> jobs available</p>
                </div>
                <div className={styles.courses_card_img}>
                    <img src="https://static1.shine.com/l/m/product_image/images_all/1561360226_4430.png" alt=""/>
                </div>
            </div>
            <div className={styles.courses_card}>
                <div className={styles.courses_card_title}>
                    <h3>AWS Architect Certification Training</h3>
                    <p>21 people bought</p>
                    <p><span>34356</span> jobs available</p>
                </div>
                <div className={styles.courses_card_img}>
                    <img src="https://static1.shine.com/l/m/product_image/images_all/1564124425_1273.png" alt=""/>
                </div>
            </div>
        </div>
            <div>
            <button>View all courses</button>
            </div>
    </section>
}