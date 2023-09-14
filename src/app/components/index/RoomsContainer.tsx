import styles from "./roomsContainer.module.css"
import Link from "next/link";

export default function RoomsContainer() {
    return (
        <section className="section">
            <h1>Entdecken Sie unsere Zimmer</h1>
            <div className={styles.grid}>
                <div className={styles.imageContainer}>
                    <img src="https://www.althoffcollection.com/fileadmin/_processed_/e/4/csm_althoff-collection-seehotel-ueberfahrt-zimmer-Elegant_Nature_Deluxe_Seeblick_f6085efa8b.jpg"></img>
                    <div className={styles.roomInfo}>Some Informational Text about a specific type of room</div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://www.hotel-marc.de/wp-content/uploads/2021/09/Muenchen_Hotel_Marc_Deluxe_Hotelzimmer_hoch.jpg"/>
                    <div className={styles.roomInfo}>Some Informational Text about a specific type of room</div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="https://www.gastgeber-ebersberg.de/wp-content/uploads/formidable/4/hotel-zimmer-bad-4279.jpg"/>
                    <div className={styles.roomInfo}>Some Informational Text about a specific type of room</div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link className="actionButton" href="/rooms">Mehr Erfahren</Link>
            </div>
        </section>
    )
}