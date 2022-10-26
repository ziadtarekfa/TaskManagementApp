import '../componentsStyles/AddTask.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../database';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { addTask } from '../redux/tasksSlice';
const AddTask = ({ setAddTaskIsOpen }) => {


    const [subtasks, setSubtasks] = useState([""]);
    const { activeBoardID } = useSelector((state) => state.tasks);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const statusRef = useRef();
    const dispatch = useDispatch();
    // const no_of_subtasks_Ref = useRef();

    function removeBlank(subTemp) {
        return subTemp !== "";
    }


    async function createTask() {
        setAddTaskIsOpen(false);
        const filteredSubtasks = subtasks.filter(removeBlank);

        const task = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            status: statusRef.current.value.toUpperCase(),
            no_of_subtasks: filteredSubtasks.length
        };
        dispatch(addTask(task));

        const taskRef = await addDoc(collection(db, 'Boards', activeBoardID, 'Tasks'), {

            title: task.title,
            description: task.description,
            status: task.status,
            no_of_subtasks: task.no_of_subtasks
        });


        // console.log(`taskRef = ${taskRef}`);

        // filteredSubtasks.forEach((element) => {
        //     await addDoc(collection(db, 'Boards', activeBoardID, 'Tasks', taskRef, 'Subtasks'), {
        //         title: element
        //     });
        // });


    }

    function addSubTask() {
        setSubtasks([...subtasks, ""]);
    }
    return (
        <div className='modal-background'>
            <div className="add-task">
                <h3>Add New Task</h3>
                <label>Title</label>
                <input placeholder="eg.Take coffee break" ref={titleRef}></input>
                <label>Description</label>
                <input ref={descriptionRef} placeholder="eg.It's always good to take a break.This 15 minute break, will recharge the batteries a little"></input>
                <label className='subtasks-label'>Subtasks</label>
                <div className="subtasks">

                    {
                        subtasks.map((subtask, index) => {
                            return (
                                <div>
                                    <input value={subtask} placeholder="Make Coffee.."
                                        onChange={(e) => {
                                            const arr = [...subtasks];
                                            arr[index] = e.target.value;
                                            setSubtasks(arr);
                                        }}
                                    ></input>
                                </div>
                            );
                        })

                    }

                </div>
                <button className='add-new-subtask' onClick={addSubTask} >+Add New Subtask</button>
                <label>Status</label>
                <select ref={statusRef}>
                    <option>Todo</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>
                <button className='create-task' onClick={createTask}>Create Task</button>
            </div>
        </div>

    );
}

export default AddTask;