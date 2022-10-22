import '../componentsStyles/Header.css';
import { useEffect, useRef, useState } from 'react';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../database';
const Header = () => {
    const [boardName, setBoardName] = useState();
    const boardRef = doc(db, "Boards", "RtKfBUODm9c7AQtRUCUv");
    useEffect(() => {
        getDoc(boardRef).then((doc) => {
            setBoardName(doc.data().name);
        });
    });
    return (
        <div className='Header'>
            <h1>{boardName}</h1>
            <button>+ Add New Task</button>

        </div>
    );
}

export default Header;