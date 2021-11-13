import "./style.css"

const CustomRadioButton = ({label, children, value, handleChange, checked}) => {
    return (
        <label className="custom-label text-hover" htmlFor={label && label}>
            <div className={`custom-radio ${checked && "checked"}`}>
                <div className="custom-radio-inner"></div>
            </div>

            { children  }
        </label>
    )
}

export default CustomRadioButton
