import '../componentsStyles/SideBar.css';
const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>kanban</h1>
            <p>ALL BOARDS (8)</p>
            <div className='boards'>
                <button>Platform Launch</button>
                <button>Platform Launch</button>
                <button>Platform Launch</button>
            </div>
        </div>
    );
}

export default SideBar;