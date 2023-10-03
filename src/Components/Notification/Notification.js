import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
function Notification(){
    return(
    <main className='d-flex flex-column align-items-center'>
        <h1>Notifications</h1>
        <div className="w-50 m-3 p-3 bg-primary text-light"><FontAwesomeIcon icon={faCircleCheck} className="mx-2" />Information Message</div>
        <div className="w-50 m-3 p-3 bg-success text-light"><FontAwesomeIcon icon={faCircleCheck} className="mx-2" />Success Message</div>
        <div className="w-50 m-3 p-3 bg-warning text-light"><FontAwesomeIcon icon={faBell} className="mx-2" />Warning Message</div>
        <div className="w-50 m-3 p-3 bg-danger text-light"><FontAwesomeIcon icon={faExclamation} className="mx-2" />Error Message</div>
    </main>
    )
}

export default Notification