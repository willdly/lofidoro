import React, { useState } from "react";
import Button from "./Button";

const Settings = () => {
    const [newTimer, setNewTimer] = useState({
        lofidoro: 20,
        short: 5,
        long: 15,
        active: 'lofidoro'
    })

    const handleChange = input => {
        const{name, value} = input.target
        switch (name) {
            case 'lofidoro':
                setNewTimer({
                    ...newTimer,
                    lofidoro: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <label>Time (minutes)</label>
            <form noValidate>
                <div className="input-wrapper">
                    <div>
                        <label>Lofidoro</label>
                        <input className="input" name ="lofidoro" onChange={handleChange} value={newTimer.lofidoro} />
                    </div>
                    <div>
                        <label>Short Break</label>
                        <input className="input" name ="shortBreak" onChange={handleChange} value={newTimer.short} />
                    </div>
                    <div>
                        <label>Long Break</label>
                        <input className="input" name ="longBreak" onChange={handleChange} value={newTimer.long} />
                    </div>
                </div>
            </form>
            <Button title="Set Timer" _callback={handleSubmit} />
        </div>
    )

}

export default Settings