import styles from "../../styles/rooms.module.css";
import Header from "../components/Header";
import Link from "next/link";

export default function Rooms() {
    return (
        <div>
            <Header titleLight="Komfort" title="In Jedem Zimmer"
                    info="Entdecken Sie unsere gemütlichen Einzelzimmer, Doppelzimmer und unsere Ferienwohnung"
                    image="https://www.althoffcollection.com/fileadmin/_processed_/e/4/csm_althoff-collection-seehotel-ueberfahrt-zimmer-Elegant_Nature_Deluxe_Seeblick_f6085efa8b.jpg"
                    imageAlt="Beispielbild eines Zimmers in der Pension Goldener Adler" color="#3A5F6F"/>
            <section className="section">
                <h1>Einzel- & Doppelzimmmer</h1>
                <p>In unserer Pension stehen drei Einbettzimmer und sieben Doppelzimmer zur Verfügung. Die Räume sind
                    ca. 21 Quadratmeter groß, in hellen Farben gehalten, modern eingerichtet und gut ausgestattet.</p>
                <p>Zur Grundausstattung aller Zimmer gehören: Ein eigenes Badezimmer, Bettwäsche und Handtücher,
                    Telefon, Internet- und Faxanschlüsse, kostenfreies WLAN, einen Kabel-Flachbild-TV, Radiowecker,
                    Heizung und schallisolierte Fenster.</p>
                <div className={styles.grid}>
                    <img src="http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"/>
                    <img src="http://www.gasthof-goldener-adler.de/images/pension/ferienwohnung_06.JPG"/>
                </div>
            </section>
            <section className="section">
                <h1>Ferienwohnung</h1>
                <p>Unsere Ferienwohnung besteht aus einem Doppelzimmer und einem Einzelzimmer mit einem kleinen Flur,
                    zuzüglich Küche mit Vollausstattung, sowie Bad mit Dusche und WC. Wir möchten, dass sie sich bei uns
                    wohl fühlen.</p>
                <div className={styles.grid}>
                    <img src="http://www.gasthof-goldener-adler.de/images/pension/ferienwohnung_06.JPG"/>
                    <img src="http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"/>
                </div>
            </section>
            <section className={styles.center + " section"}>
                <div>
                    <p>Frühstück, Parkplätze oder sonstiges.</p>
                    <p>Erfahren Sie hier mehr zu unseren Serviceangeboten</p>
                </div>
                <Link className="actionButton" href="/service">Mehr Erfahren</Link>
            </section>
        </div>
    )
}