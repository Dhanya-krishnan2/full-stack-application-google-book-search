import React from 'react'
import './style.css'
// importing the needed file
// we are creating a form with properties name, value, and change and clik event
const Form = ({ name, value, onChange, onClick }) => {
    return (
        <div className="form-wrapper">

            <h2 className="header">Google Books</h2>
            <form>
                <input
                    autoComplete="off"
                    value={value}
                    name={name}
                    onChange={onChange}
                    autoFocus="true"
                    type="text" />

                <button type="submit"className="submit-btn" onClick={onClick}>Search</button>
            </form>


        </div>
    )
}


export default Form