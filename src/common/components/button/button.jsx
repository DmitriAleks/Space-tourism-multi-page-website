import react from 'react'
import style from "../../../page/technology/Technology.module.scss";




const Button = (props) => {
    return (
        <div>
            <button value={props.value} onClick={props.func} className={props.class}>{props.name}</button>
        </div>
    )

}
export default Button;