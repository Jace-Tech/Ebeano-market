import "./style.css"

const InputPassword = ({ value, handleChange, label, type, children }) => {

    return (
        <div class="form-password">
            <input class="form-password-input"
                value={value && value }
                type={type && type ? "text" : "password" }
                placeholder={ label && label }
                onChange={handleChange && handleChange}
            />
            {
                children && children
            }
        </div>
    )
}

export default InputPassword
