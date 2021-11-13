// import { useField } from "formik"

import "./style.css"

const InputBox = ({ label, handleChange, value, type, kind, items}) => {

    if (kind && kind.toLowerCase() === "select") {
        return (
            <div className="input-box-form-group">
                <select className="input-box-form-control" value={ value } onChange={ handleChange && handleChange }>
                    <option selected disabled value=""> { label && label } </option>
                    {
                        items &&
                            items.map((item, index) => (
                                <option key={ index } value={ item }> { item } </option>
                            ))
                    }
                </select>
            </div>
        )
    }

    return (
        <div className="input-box-form-group">
            <input className="input-box-form-control" type={ type && type } onChange={ handleChange && handleChange } placeholder={ label && label } value={ value } />
        </div>
    )
}

export default InputBox
