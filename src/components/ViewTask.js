import '../componentsStyles/ViewTask.css';
import { AiOutlineClose } from "react-icons/ai";
const ViewTask = ({ task, setIsOpen }) => {

    function handleClick() {
        setIsOpen(false);
    }
    return (
        <div className='modal-background'>
            <div className="view-task">
                <div style={{ 'display': 'flex' }}>
                    <h2>Research Pricing Points of various competitors and trial different business models</h2>
                    <AiOutlineClose onClick={handleClick} />
                </div>
                <p className='task-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer too.
                </p>
                <h4 className='subtasks-text'>Subtasks</h4>
                <div className='subtasks-container'>
                    <div>
                        <input type="checkBox"></input>
                        <p className='subtask-description'>Research competitor pricing and business models</p>
                    </div>
                    <div>
                        <input type="checkBox"></input>
                        <p className='subtask-description'>Research competitor pricing and business models</p>
                    </div>
                    <div>
                        <input type="checkBox"></input>
                        <p className='subtask-description'>Research competitor pricing and business models</p>
                    </div>
                </div>
                <h4 className='status'>Status</h4>
                <select>
                    <option>Doing</option>
                    <option>To Do</option>
                    <option>Done</option>
                </select>
            </div>
        </div>
    );
}

export default ViewTask;