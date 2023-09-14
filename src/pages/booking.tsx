import styles from "../../styles/booking.module.css";
import SelectRoomsForm from "../components/booking/SelectRoomsForm";

export default function BookingPage() {

    return (
        <div className={styles.layout}>
            <section className="section">
                <h1>Ihre Anfrage</h1>
                <form className={styles.bookingForm}>
                    <div>
                        <label>Anreisedatum</label>
                        <input type="date" disabled value="2023-01-24"/>
                    </div>
                    <div>
                        <label>Abreisedatum</label>
                        <input type="date" disabled value="2023-01-27"/>
                    </div>
                    <div>
                        <label>Anzahl Zimmer</label>
                        <select disabled>
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
                        <select disabled>
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
                </form>
                <SelectRoomsForm roomCount={4} />
                {/*
                <section className={styles.multipleRoomSteps}>
                    <div className={styles.roomStep + " " + styles.active}>
                        <div className={styles.roomStepIcon}></div>
                        <p>Zimmer 1</p>
                    </div>
                    <div className={styles.roomStepLine + " " + styles.active}></div>
                    <div className={styles.roomStep}>
                        <div className={styles.roomStepIcon}></div>
                        <p>Zimmer 2</p>
                    </div>
                    <div className={styles.roomStepLine}></div>
                    <div className={styles.roomStep}>
                        <div className={styles.roomStepIcon}></div>
                        <p>Zimmer 3</p>
                    </div>
                </section>
                <h3>Verfügbare Zimmer</h3>
                <div className={styles.roomList}>
                    <RoomItem image={"http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"} title="Einzelzimmer" shortInfo={["21m²", "Eigenes Bad", "Für 1 Gast"]} price={30}/>
                    <RoomItem image={"http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"} title="Doppelzimmer" shortInfo={["21m²", "Eigenes Bad", "Für 2 Gäste"]} price={40}/>
                    <RoomItem image={"http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"} title="Ferienwohnung" shortInfo={["42m²", "Eigenes Bad", "Für 3 Gäste"]} price={60}/>
                    <button className={styles.nextRoomButton + " actionButtonClear"}>
                        Nächstes Zimmer wählen
                    </button>
                </div>
                */}
            </section>
        </div>
    )
}