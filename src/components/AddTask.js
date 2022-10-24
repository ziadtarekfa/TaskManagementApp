import '../componentsStyles/AddTask.css';
const AddTask = ({ setAddTaskIsOpen }) => {

    function createTask() {
        setAddTaskIsOpen(false);
    }
    return (
        <div className='modal-background'>
            <div className="add-task">
                <h3>Add New Task</h3>
                <label>Title</label>
                <input placeholder="eg.Take coffee break"></input>
                <label>Description</label>
                <input placeholder="eg.It's always good to take a break.This 15 minute break, will recharge the batteries a little"></input>
                <label>Subtasks</label>
                <div className="subtasks">
                    <div>
                        <input placeholder="eg.Make coffee"></input>
                        {/* cross icon */}
                    </div>
                    <div>
                        <input placeholder="eg.Drink coffee & smile"></input>
                        {/* cross icon */}
                    </div>
                </div>
                <button className='add-new-subtask'>+Add New Subtask</button>
                <label>Status</label>
                <select>
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