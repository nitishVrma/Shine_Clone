import React from "react"
import styles from "../../styles/HomePage.module.css"
export function CoolPlaces() {
    return <section className={styles.coolplaces}>
        <h1>Cool places to work</h1>
                <div className={styles.coolplaces_cont}>
                    <div>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/78f6785288bd42f181187b8de9dccafb.png" alt="life_insurance"/> 
                         <img src="https://static2.shine.com/r/m/images/employerbranding/a7277bda1c874825b9831cafaf6f759d.png" alt="life_insurance_logo" />
                    </div>
                    <div>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/608a7830f65e4ac4a70869e145c55c25.png" alt="birla_group" />
                        <img src="https://static2.shine.com/r/m/images/employerbranding/449660b6ea5c4aada2e211f4831cc945.png" alt="birla_group_logo"/>
                    </div>
                    <div>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/26c83ce6d9df4733a9bbc06d2e3b8f0e.png" alt="infosys"/>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/ed1796d6fc09422e883285a62c7d3733.png" alt="infosys_logo"/>
                    </div>
                    <div>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/c250bee50f5b490aac4b63fe281ab79e.png" alt="genpact"/>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/4ba34994bc414de7984c38c9cee86ebe.png" alt="genpact_logo"/>
                    </div>
                    <div>
                        <img src="https://static2.shine.com/r/m/images/employerbranding/d98a014b326648178fbb08eef46ac70e.png" alt="teleperformance" />
                        <img src="https://static2.shine.com/r/m/images/employerbranding/6c23dfb3c9224480870c900b8dddf299.png" alt="teleperformance_logo"/>
                    </div>
                </div>
    </section>
}