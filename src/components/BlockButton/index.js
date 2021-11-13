import { Link } from "react-router-dom"
import "./style.css"

const BlockButton = ({link, text, type}) => {
    return (
        <Link to={link && link} className={`block-btn ${type && type? "light" : "dark"}`}>{text && text}</Link>
    )
}

export default BlockButton
