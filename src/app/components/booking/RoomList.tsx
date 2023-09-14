'use client'

import styles from "./booking.module.css";
import RoomItem from "./RoomItem";
import {useState} from "react";

interface RoomListProps {
    listIndex: number;
    formData: Map<number, number>;
    setFormData: (value: Map<number, number>) => void;
}


export default function RoomList({listIndex, formData, setFormData}: RoomListProps) {
    const [selectedRoom, setSelectedRoom] = useState<number>(formData.get(listIndex));

    const changeRoomSelection = (value: number) => {
        setSelectedRoom(value);
        formData.set(listIndex, value);
        setFormData(formData);
    }

    return (
        <>
            <h3>Zimmer {listIndex + 1}</h3>
            <div className={styles.roomList}>
                <RoomItem id={1} selected={1 === selectedRoom} selectRoom={changeRoomSelection} image={"http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"} title="Einzelzimmer"
                          shortInfo={["21m²", "Eigenes Bad", "Für 1 Gast"]} price={30}/>
                <RoomItem id={2} selected={2 === selectedRoom} selectRoom={changeRoomSelection} image={"http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"} title="Doppelzimmer"
                          shortInfo={["21m²", "Eigenes Bad", "Für 2 Gäste"]} price={40}/>
                <RoomItem id={3} selected={3 === selectedRoom} selectRoom={changeRoomSelection} image={"http://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg"} title="Ferienwohnung"
                          shortInfo={["42m²", "Eigenes Bad", "Für 3 Gäste"]} price={60}/>
            </div>
        </>
    )
}