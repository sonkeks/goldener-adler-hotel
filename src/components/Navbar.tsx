import styles from "../../styles/navbar.module.css"
import {useScrollPosition} from "../scrollHelper";
import {useEffect, useState} from "react";
import {GiEagleEmblem} from "react-icons/gi";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const [transparentAtTop, setTransparentAtTop] = useState<boolean>(true);
    const transparentNavbarPages = ["/", "/rooms"];

    useEffect(() => {
        setTransparentAtTop(transparentNavbarPages.includes(pathname));
    }, [pathname])

    useScrollPosition(({currPos}) => {
        if (transparentNavbarPages.includes(pathname)) {
            const isTop = currPos.y > -30;
            if (isTop !== transparentAtTop) {
                setTransparentAtTop(isTop);
            }
        } else {
            if (transparentAtTop !== false) {
                setTransparentAtTop(false);
            }
        }
    }, [transparentAtTop, pathname], null, false, 200)

    return (
        <div className={transparentAtTop ? styles.navbarTransparent : styles.navbar}>
            <div className={styles.flexContainer}>
                <div className={styles.innerFlex}>
                    <GiEagleEmblem size={50}/>
                </div>
                <div className={styles.innerFlex}>
                    <Link className={styles.navItem} href="/">
                        Startseite
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </Link>
                    <Link className={styles.navItem} href="/service">
                        Service
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </Link>
                    <Link className={styles.navItem} href="/rooms">
                        Zimmer
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </Link>
                    <Link className={styles.navItem} href="/surroundings">
                        Umgebung
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </Link>
                    <span className={styles.navItem}>
                        Kontakt
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </span>
                    <span className={styles.navItem}>
                        Impressum
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </span>
                </div>
            </div>
        </div>
    )
}