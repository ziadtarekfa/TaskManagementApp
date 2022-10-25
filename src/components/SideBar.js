import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../database';
import '../componentsStyles/SideBar.css';
import { setDoingTasks, setDoneTasks, setToDoTasks } from '../redux/tasksSlice';
const SideBar = () => {


    // const { toDoTasks, doneTasks, doingTasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    function viewBoard(event) {
        const collectionRef = collection(db, "Boards", event.currentTarget.id, "Tasks");
        const toDotemp = [];
        const doneTemp = [];
        const doingTemp = [];
        getDocs(collectionRef).then((data) => {

            data.forEach((doc) => {
                if (doc.data().status === "TODO") {
                    toDotemp.push(doc.data());
                }
                else if (doc.data().status === "DONE") {
                    doneTemp.push(doc.data());
                }
                else if (doc.data().status === "DOING") {
                    doingTemp.push(doc.data());
                }
            });
            dispatch(setToDoTasks(toDotemp));
            dispatch(setDoneTasks(doneTemp));
            dispatch(setDoingTasks(doingTemp));
        });
    }
    const [boardsList, setBoardsList] = useState([]);
    const [boardsCount, setCount] = useState();
    useEffect(() => {
        const boardsRef = collection(db, "Boards");
        getDocs(boardsRef).then((boards) => {
            let count = 0;
            const tempBoardsList = [];
            boards.forEach((board) => {
                tempBoardsList.push(board);
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
                            <button onClick={viewBoard} key={board.id} id={board.id}>{board.data().name}</button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SideBar;