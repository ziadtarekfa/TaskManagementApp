import '../componentsStyles/Task.css';
const Task = ({ title, numOfSubtasks }) => {
    function handleClick() {
        console.log("You clicked");
    }
    return (
        <div className='Task' onClick={handleClick}>
            <h4>{title}</h4>
            <p>{`${numOfSubtasks} Subtasks`}</p>
        </div>
    );
}

export default Task;