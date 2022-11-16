import icon from '../../assets/images/notifyicon.svg'
import './styles.css'

function NotificationButton(){
    return(
        <div className="btn-red-notify">
        <img src={icon} alt="notificar"/>
    </div>
    )
}
export default NotificationButton