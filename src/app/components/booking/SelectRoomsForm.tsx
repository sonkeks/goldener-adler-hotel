'use client'

import React, {useEffect, useState} from "react";
import styles from "./booking.module.css";
import RoomList from "./RoomList";

interface SelectRoomsFormProps {
    roomCount: number;
}

export default function SelectRoomsForm({roomCount}: SelectRoomsFormProps) {
    let roomMap = new Map();
    const [page, setPage] = useState<number>(0);
    const [formData, setFormData] = useState<Map<number, number>>(roomMap);

    useEffect(() => {
        for(let i = 0; i < roomCount; i++) {
            roomMap.set(i, null);
        }
    }, [])

    const SelectRoomPageDisplay = () => {
        switch (page) {
            case 0:
                return <RoomList key={0} formData={formData} setFormData={setFormData} listIndex={0}/>;
            case 1:
                return <RoomList key={1} formData={formData} setFormData={setFormData} listIndex={1}/>;
            case 2:
                return <RoomList key={2} formData={formData} setFormData={setFormData} listIndex={2}/>;
            case 3:
                return <RoomList key={3} formData={formData} setFormData={setFormData} listIndex={3}/>;
            case 4:
                return <RoomList key={4} formData={formData} setFormData={setFormData} listIndex={4}/>;
            case 5:
                return <RoomList key={5} formData={formData} setFormData={setFormData} listIndex={5}/>;
            case 6:
                return <RoomList key={6} formData={formData} setFormData={setFormData} listIndex={6}/>;
            case 7:
                return <RoomList key={7} formData={formData} setFormData={setFormData} listIndex={7}/>;
            case 8:
                return <RoomList key={8} formData={formData} setFormData={setFormData} listIndex={8}/>;
            case 9:
                return <RoomList key={9} formData={formData} setFormData={setFormData} listIndex={9}/>;
            case 10:
                return <RoomList key={10} formData={formData} setFormData={setFormData} listIndex={10}/>;
        }
    }

    const CreateSteps = (count: number) => {
        let elements = [];
        for(let i = 0; i < count; i++) {
            elements.push(
                <React.Fragment key={i}>
                    <div onClick={() => setPage(i)} className={`${styles.roomStep} ${page >= i ? styles.active : ""}`}>
                        <div className={styles.roomStepIcon}></div>
                        <p>Zimmer {i + 1}</p>
                    </div>
                    {(i + 1 < roomCount) &&
                        <div className={`${styles.roomStepLine} ${page > i ? styles.active : ""}`}></div>}
                </React.Fragment>
            );
        }
        return elements;
    }

    return (
        <div>
            <section className={styles.multipleRoomSteps}>
                {CreateSteps(roomCount)}
            </section>
            {SelectRoomPageDisplay()}
        </div>
    )
}