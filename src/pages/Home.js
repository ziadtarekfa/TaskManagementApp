import { useEffect, useRef, useState } from 'react';
import StatusItem from '../components/StatusItem';
import Task from '../components/Task';
import { collection, getDocs } from "firebase/firestore";
import Header from '../components/Header';
import { db } from '../database';
import '../pagesStyles/Home.css';
import SideBar from '../components/SideBar';
const Home = () => {
    const collectionRef = collection(db, "Boards", "RtKfBUODm9c7AQtRUCUv", "Tasks");
    // const toDoTasks = [];
    const [toDoTasks, setToDoTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [doingTasks, setDoingTasks] = useState([]);



    useEffect(() => {
        const toDoTasks = [];
        const doneTasks = [];
        const doingTasks = [];
        getDocs(collectionRef).then((data) => {
            data.forEach((doc) => {
                if (doc.data().status === "TODO") {
                    toDoTasks.push(doc.data());
                }
                else if (doc.data().status === "DONE") {
                    doneTasks.push(doc.data());
                }
                else if (doc.data().status === "DOING") {
                    doingTasks.push(doc.data());
                }
            });
            setToDoTasks(toDoTasks);
            setDoneTasks(doneTasks);
            setDoingTasks(doingTasks);
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