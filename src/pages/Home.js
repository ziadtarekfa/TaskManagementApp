import StatusItem from '../components/StatusItem';
import Task from '../components/Task';
import '../pagesStyles/Home.css';
const Home = () => {
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