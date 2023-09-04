import styles from "../../styles/headerCarousel.module.css"

export default function HeaderCarousel() {
    return (
        <div>
            <img className={styles.image}
                 src="https://media-cdn.holidaycheck.com/w_1280,h_720,c_fill,q_80/ugc/images/52983c6a-bab6-348d-84a5-2554e9b838f2"/>
            <div className={styles.overlay}>
                <div className={styles.spacer + " " + styles.hidden}>
                    <div className={styles.scrollIndicator}></div>
                </div>
                <div className={styles.content}>
                    <button>left</button>
                    <div className={styles.titleContainer}>
                        <h1>Willkommen bei uns im Goldenen Adler im gemütlichen Torgelow</h1>
                        <button className="button">Jetzt Buchen</button>
                    </div>
                    <button>right</button>
                </div>
                <div className={styles.spacer}>
                    <div className={styles.scrollIndicator}>Scroll Down</div>
                </div>
            </div>
        </div>
    )
}
