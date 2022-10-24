import '../componentsStyles/Header.css';
import { useEffect, useRef, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../database';
import AddTask from './AddTask';
const Header = () => {
    const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
    const [boardName, setBoardName] = useState();
    const boardRef = doc(db, "Boards", "RtKfBUODm9c7AQtRUCUv");
    useEffect(() => {
        getDoc(boardRef).then((doc) => {
            setBoardName(doc.data().name);
        });
    });
    return (
        <>
            <div className='Header'>
                <h1>{boardName}</h1>
                <button onClick={() => {
                    setAddTaskIsOpen(true);
                }}>+ Add New Task</button>

            </div>
            {addTaskIsOpen && <AddTask setAddTaskIsOpen={setAddTaskIsOpen} />}
        </>
    );
}

export default Header;