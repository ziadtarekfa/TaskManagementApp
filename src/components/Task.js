import { useState } from 'react';
import '../componentsStyles/Task.css';
import ViewTask from './ViewTask';
const Task = ({ task }) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='Task' onClick={() => { setIsOpen(true) }}>
                <h4>{task.title}</h4>
                <p>{`${task.no_of_subtasks} Subtasks`}</p>

            </div>
            {isOpen && <ViewTask setIsOpen={setIsOpen} />}
        </>
    );
}

export default Task;