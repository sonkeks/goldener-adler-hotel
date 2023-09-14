import styles from "./booking.module.css";

interface RoomItemProps {
    id: number;
    selected: boolean;
    selectRoom: (value: number) => void;
    image: string;
    title: string;
    shortInfo: string[];
    price: number;
}

export default function RoomItem({id, selected, selectRoom, image, title, shortInfo, price}: RoomItemProps) {
    return (
        <div className={`${styles.roomItem} ${selected ? styles.selected : ""}`}>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <div className={styles.shortInfo}>
                {shortInfo.map((info, index) => {
                    return <span key={index}>{info}</span>
                })}
            </div>
            <div className={styles.roomInfo}>
                <div>
                    <small>ab</small>
                    <h3>{price + "€"}</h3>
                </div>
                <button onClick={() => selectRoom(id)} className={`actionButton ${selected ? styles.selectedButton : ""}`}>Auswählen</button>
            </div>
        </div>
    )
}