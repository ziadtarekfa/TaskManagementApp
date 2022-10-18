import '../componentsStyles/StatusItem.css';
const StatusItem = ({ color, status, count }) => {
    return (
        <div className='status-item'>
            <div style={{ 'backgroundColor': color }}></div>
            <span>{`${status}(${count})`}</span>
        </div>
    );
}

export default StatusItem;