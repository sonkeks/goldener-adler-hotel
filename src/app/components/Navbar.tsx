'use client'

import styles from "./navbar.module.css"
import {useScrollPosition} from "../lib/scrollHelper";
import {useEffect, useState} from "react";
import {GiEagleEmblem} from "react-icons/gi";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const [transparentAtTop, setTransparentAtTop] = useState<boolean>(true);
    const transparentNavbarPages = ["/", "/rooms", "/service", "/blog"];

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
                <div className={styles.innerFlexLeft}>
                    <GiEagleEmblem size={50}/>
                    <div className={styles.title}>
                        <h3>Pension</h3>
                        <h3>Goldener Adler</h3>
                    </div>
                </div>
                <div className={styles.innerFlexRight}>
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
                    <Link className={styles.navItem} href="/blog">
                        Umgebung
                        <div className={transparentAtTop ? styles.underlineTransparent : styles.underline}></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}