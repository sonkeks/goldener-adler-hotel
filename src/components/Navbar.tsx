import styles from "../../styles/navbar.module.css"
import {useScrollPosition} from "../scrollHelper";
import {useState} from "react";

export default function Navbar() {
    const [transparentAtTop, setTransparentAtTop] = useState<boolean>(true);

    useScrollPosition(({ currPos }) => {
        const isTop = currPos.y > -30;
        if (isTop !== transparentAtTop) {
            setTransparentAtTop(isTop);
        }
    }, [transparentAtTop], null, false, 200)

    return (
        <div className={transparentAtTop ? styles.navbarTransparent : styles.navbar}>
            <div className={styles.flexContainer}>
                <div className={styles.innerFlex}>
                    <h2>Pension Goldener Adler</h2>
                </div>
                <div className={styles.innerFlex}>
                    <span>Über Uns</span>
                    <span>Service</span>
                    <span>Zimmer</span>
                    <span>Umgebung</span>
                    <span>Kontakt</span>
                    <span>Impressum</span>
                </div>
            </div>
        </div>
    )
}