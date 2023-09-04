import styles from "../../styles/navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.flexContainer}>
                <div className={styles.innerFlex}>
                    <button>menu</button>
                    <h2>Pension Goldener Adler</h2>
                </div>
                <button>Jetzt Buchen</button>
            </div>
        </div>
    )
}