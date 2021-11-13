import { useState, useEffect } from "react"
import "./style.css"

const CustomRadioButton = ({label, children, quantity, value, onChange}) => {
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
        let type = !check ? "add" : "delete"
        onChange && onChange(value, quantity, type)
    }

    return (
        <label onClick={handleCheck} className="custom-label text-hover" htmlFor={label && label}>
            <div className={`custom-checked ${check && "checked"}`}>
                <div className="custom-checked-inner"></div>
            </div>
            { children && children }
        </label>
    )
}

export default CustomRadioButton
