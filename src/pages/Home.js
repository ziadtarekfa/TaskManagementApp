import { useEffect, useRef, useState } from 'react';
import StatusItem from '../components/StatusItem';
import Task from '../components/Task';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../database';
import '../pagesStyles/Home.css';
const Home = () => {
    const collectionRef = collection(db, "Boards", "RtKfBUODm9c7AQtRUCUv", "Tasks");
    const tasks = [];
    useEffect(() => {
        getDocs(collectionRef).then((data) => {
            data.forEach((doc) => {
                tasks.push(doc.data());
                console.log(`${doc.data().title} + ${doc.data().no_of_subtasks}`);
            });
        });
    }, []);
    return (
        <div className='Home'>
            <div className='status-container'>
                <StatusItem color='#4DF0E2' status="TODO" count={4} />
                <StatusItem color='#645FC7' status="DOING" count={6} />
                <StatusItem color='#49F2A9' status="DONE" count={7} />
            </div>
            <div className='tasks-container'>
                <div className='todo-tasks'>
                    <Task />
                    <Task />
                    <Task />
                </div>
                <div className='doing-tasks'>
                    <Task />
                    <Task />
                    <Task />
                </div>
                <div className='done-tasks'>
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>

    );
}

export default Home;