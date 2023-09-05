import styles from "../../styles/header.module.css"

export default function Header() {
    return (
        <section className={styles.headerSection}>
            <div className={styles.banner}>
                <div className={styles.headerContent}>
                    <header>
                        <h1>Pension</h1>
                        <h1>Goldener Adler</h1>
                        <p>Willkommen bei uns im gemütlichen Torgelow. Entdecken Sie die Stadt an der Uecker und ihre
                            umgebende Natur. Genießen Sie die Nähe zur Ostsee und zum Oderhaff</p>
                    </header>
                </div>
                <svg className={styles.curve} viewBox="0 0 744 2166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M289.002 0H0V2166H744C392.899 1711.07 318.465 1444.8 311.692 1172.55C304.919 900.311 437.391 730.756 425.143 444.185C419.325 308.064 332.392 101.494 289.002 0Z" fill="#af9453"/>
                </svg>

                <div className={styles.headerImage}>
                    <img className={styles.heroImage}
                         src="https://www.harzpin.de/wp-content/uploads/2021/06/20150912_165222-2-2048x1350.jpg" alt="Pension Goldener Adler Header Image"/>
                </div>
            </div>
            <form className={styles.bookingForm}>
                <div>
                    <label>Anreisedatum</label>
                    <input type="date"/>
                </div>
                <div>
                    <label>Abreisedatum</label>
                    <input type="date"/>
                </div>
                <div>
                    <label>Anzahl Personen</label>
                    <input min="1" type="number" defaultValue="1"/>
                </div>
                <input className={styles.searchButton} value="" type="submit"></input>
            </form>
        </section>
    )
}