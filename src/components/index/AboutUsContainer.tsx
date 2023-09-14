import styles from "../../../styles/index/aboutUsContainer.module.css"
import {FaEnvelope, FaPhone} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

export default function AboutUsContainer() {
    return (
        <section id="aboutUs" className={styles.info}>
            <div>
                <h1>Über Uns</h1>
                <div className={styles.grid}>
                    <p>
                        Unser Gästehaus befindet sich in der ruhigen Kleinstadt Torgelow in Mecklenburg Vorpommern. In
                        unmittelbarer Nähe befinden sich die Ostsee
                        und das Oderhaff, Wälder, der Fluss die Uecker und viele schöne Seen. Entspannen Sie in unseren
                        gemütlichen und komfortabel eingerichteten
                        Zimmern und genießen Sie den Service unserer Pension. Wir würden uns freuen, Sie künftig zu
                        unseren
                        Gästen zählen zu dürfen.
                    </p>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <FaEnvelope size="20"/><span>goldener.adler@pension.de</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaPhone size="20"/><span>+49 (0) 3976 202045</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaLocationDot size="20"/>
                            <span>
                                <div>Torgelow, Deutschland</div>
                                <div>Pasewalker Str. 32, 17358</div>
                                <div>Mecklenburg-Vorpommern</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}