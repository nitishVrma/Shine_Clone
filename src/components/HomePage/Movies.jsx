import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Movies() {
    return <section className={styles.movies}>
        <div className={styles.movies_container}>
            <div className={styles.movies_title}>
                <h2>Movies With Motivational Quotes</h2>
            </div>
            <div className={styles.movies_body}>
                <div>
						<img
							alt="Movies With Motivational Quotes"
							data-src="https://images.ottplay.com/images/promotions/Shine/desktop-home-1.png"
							class="lozad"
							src="https://images.ottplay.com/images/promotions/Shine/desktop-home-1.png"
							data-loaded="true"
						/>
					</div>

					<div>
						<img
							alt="Movies With Motivational Quotes"
							data-src="https://images.ottplay.com/images/promotions/Shine/desktop-home-2.png"
							class="lozad"
							src="https://images.ottplay.com/images/promotions/Shine/desktop-home-2.png"
							data-loaded="true"
						/>
					</div>

					<div>
						<img
							alt="Movies With Motivational Quotes"
							data-src="https://images.ottplay.com/images/promotions/Shine/desktop-home-3.png"
							class="lozad"
							src="https://images.ottplay.com/images/promotions/Shine/desktop-home-3.png"
							data-loaded="true"
						/>
					</div>

					<div>
						<img
							alt="Movies With Motivational Quotes"
							data-src="https://images.ottplay.com/images/promotions/Shine/desktop-home-4.png"
							class="lozad"
							src="https://images.ottplay.com/images/promotions/Shine/desktop-home-4.png"
							data-loaded="true"
						/>
					</div>
            </div>
        </div>
    </section>
}