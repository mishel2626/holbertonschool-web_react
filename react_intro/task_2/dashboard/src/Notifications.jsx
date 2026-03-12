import './Notifications.css';
import closeButtton from './assets/close-button.png'
import { getLatestNotification } from './utils';

const Notifications = () =>{

    const handleClick = () =>{
        console.log("Close button has been clicked");
    }
    return(
        <div className="notification-items">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button style={{float:'right'}} aria-label="Close" onClick={handleClick}>
                <img src={closeButtton} style={{width: "13px", height: "10px"}}/>
            </button>
        </div>
    )
}

export default Notifications;