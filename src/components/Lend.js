
import React, { useState } from "react";
import facade from "../api/lendFacade"


export default function Lend(){
    const [username, setUsername] = useState("")
    const [equipmentName, setEquipmentName] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEquipmentName = (event) => {
        setEquipmentName(event.target.value);
    }

    const handleLendSubmission = () => {
        facade.createLend(username, equipmentName)
        .then((response) => {
            console.log("Your loan has been created :)", response)
        })
        .catch((error) => {
            console.log("You cannot lend this equipment:", error)
        })
    }

    return (
        <div>
            <h1>Lend equipment!</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label htmlFor="equipmentName">Name on the equipment:</label>
                <input type="text" id="equipment_name" value={equipmentName} onChange={handleEquipmentName}/>
            </div>
            <button onClick={handleLendSubmission}>Lend equpiment</button>
        </div>
    )
}