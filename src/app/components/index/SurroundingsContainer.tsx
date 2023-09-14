import styles from "./surroundingsContainer.module.css"
import Link from "next/link";

export default function SurroundingsContainer() {
    return (
        <section className="section">
            <h1>Erkunden Sie die Umgebung</h1>
            <div className={styles.grid}>
                <div className={styles.imageContainer}>
                    <img src="https://www.torgelow.de/de/unsere-stadt-torgelow/stadtansichten/ukranenland-07.jpg?cid=1lk.lce&"></img>
                    <div className={styles.roomInfo}>Some Informational Text about the location</div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://www.vorpommern.de/fileadmin/_processed_/8/c/csm_Torgelow_christuskirche_autor_thomas_grundner_c7bcd9ba5a.jpg"/>
                    <div className={styles.roomInfo}>Some Informational Text about the location</div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://www.torgelow.de/de/unsere-stadt-torgelow/stadtansichten/flusslandschaft-an-der-uecker.jpg?cid=1vf.l0y&"/>
                    <div className={styles.roomInfo}>Some Informational Text about the location</div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link className="actionButton" href="/blog">Mehr Erfahren</Link>
            </div>
        </section>
    )
}