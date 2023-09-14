import styles from "../../styles/index/header.module.css"
import {FaSearch} from "react-icons/fa";
import { useRouter} from "next/router";

interface HeaderProps {
    titleLight: string,
    title: string,
    info: string,
    image: string,
    imageAlt: string,
    color: string,
}

export default function Header({titleLight, title, info, image, imageAlt, color}: HeaderProps) {
    const router = useRouter();

    return (
        <section className={styles.headerSection}>
            <div className={styles.banner} style={{backgroundColor: color}}>
                <div className={styles.headerContent}>
                    <header>
                        <h1>{titleLight}</h1>
                        <h1>{title}</h1>
                        <p>{info}</p>
                    </header>
                </div>
                <svg className={styles.curve} viewBox="0 0 744 2166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M289.002 0H0V2166H744C392.899 1711.07 318.465 1444.8 311.692 1172.55C304.919 900.311 437.391 730.756 425.143 444.185C419.325 308.064 332.392 101.494 289.002 0Z" fill={color}/>
                </svg>

                <div className={styles.headerImage}>
                    <img className={styles.heroImage}
                         src={image} alt={imageAlt}/>
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
                    <label>Anzahl Zimmer</label>
                    <select>
                        <option value="1">1 Zimmer</option>
                        <option value="2">2 Zimmer</option>
                        <option value="3">3 Zimmer</option>
                        <option value="4">4 Zimmer</option>
                        <option value="5">5 Zimmer</option>
                        <option value="6">6 Zimmer</option>
                        <option value="7">7 Zimmer</option>
                        <option value="8">8 Zimmer</option>
                        <option value="9">9 Zimmer</option>
                        <option value="10">10 Zimmer</option>
                    </select>
                </div>
                <div>
                    <label>Anzahl Personen</label>
                    <select>
                        <option value="1">1 Person</option>
                        <option value="2">2 Person</option>
                        <option value="3">3 Person</option>
                        <option value="4">4 Person</option>
                        <option value="5">5 Person</option>
                        <option value="6">6 Person</option>
                        <option value="7">7 Person</option>
                        <option value="8">8 Person</option>
                        <option value="9">9 Person</option>
                        <option value="10">10 Person</option>
                    </select>
                </div>
                <FaSearch onClick={() => router.push('/booking')} className={styles.searchButton} size="22" />
            </form>
        </section>
    )
}