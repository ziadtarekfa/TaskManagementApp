import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../database';
import '../componentsStyles/SideBar.css';
const SideBar = () => {

    const [boardsList, setBoardsList] = useState([]);
    const [boardsCount, setCount] = useState();
    useEffect(() => {
        const boardsRef = collection(db, "Boards");
        getDocs(boardsRef).then((boards) => {
            let count = 0;
            const tempBoardsList = [];
            boards.forEach((board) => {
                tempBoardsList.push(board.data());
                count = count + 1;

            });
            setCount(count);
            setBoardsList(tempBoardsList);
        });

    }, []);
    return (
        <div className="sidebar">
            <h1>kanban</h1>
            <p>{`ALL BOARDS (${boardsCount || ""})`}</p>
            <div className='boards'>
                {
                    boardsList.map((board) => {
                        return (
                            <button>{board.name}</button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SideBar;