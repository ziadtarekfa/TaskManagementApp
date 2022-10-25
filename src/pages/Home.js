import { useEffect, useState } from 'react';
import StatusItem from '../components/StatusItem';
import Task from '../components/Task';
import { collection, getDocs } from "firebase/firestore";
import Header from '../components/Header';
import { db } from '../database';
import '../pagesStyles/Home.css';
import SideBar from '../components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { setDoingTasks, setDoneTasks, setToDoTasks } from '../redux/tasksSlice';
const Home = () => {
    const collectionRef = collection(db, "Boards", "RtKfBUODm9c7AQtRUCUv", "Tasks");

    const { toDoTasks, doneTasks, doingTasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    useEffect(() => {
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

    }, []);



    return (
        <div className='home'>
            <SideBar />
            <div className='home-content'>
                <Header />
                <div className='box'>
                    <div className='status-container'>
                        <StatusItem color='#4DF0E2' status="TODO" count={4} />
                        <StatusItem color='#645FC7' status="DOING" count={6} />
                        <StatusItem color='#49F2A9' status="DONE" count={7} />
                    </div>
                    <div className='tasks-container'>
                        <div className='todo-tasks'>
                            {
                                toDoTasks.map((task) => {
                                    return (
                                        <Task task={task} />
                                    );
                                })
                            }
                        </div>
                        <div className='doing-tasks'>
                            {
                                doingTasks.map((task) => {
                                    return (
                                        <Task task={task} />
                                    );
                                })
                            }
                        </div>
                        <div className='done-tasks'>
                            {
                                doneTasks.map((task) => {
                                    return (
                                        <Task task={task} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;