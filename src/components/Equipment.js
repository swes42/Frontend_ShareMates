import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import facade from "../api/equipmentFacade.js";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Equipment() {

    const [equipments, setEquipments] = useState([])

function fetchEquipments () {
   facade.getAllEquipments()
   .then((data) => {
    setEquipments(data);
   })
   .catch((error) => {
    console.log("Could not fetch any equipments:", error);
   })
}

    
    useEffect(() => {
        fetchEquipments();
    }, [])


    try {
      return (

        
        <Container>
            <h1>All equipment</h1>
            
            {equipments.map(e => (
            <Card key={e.id} className="mb-3">
                <Card.Body>
                    <Card.Title>{e.e_description}</Card.Title>
                    <Card.Text>{e.e_name}</Card.Text>
                </Card.Body>
            </Card>
            ))}
        </Container>
        
       
/** Den klassiske tabel
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h3 className="mt-5 text-center">All equipments</h3>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Equipments name:</th>
                                <th scope="col">Equipment description:</th>
                            </tr>
                        </thead>

                        <tbody>
                            {equipments.map(e =>
                                <tr key={e.id}>
                                    <td>{e.e_name}</td>
                                    <td>{e.e_description}</td>
                                </tr>)}
                        </tbody>

                    </table>
                </div>
            </div>

        </React.Fragment>
        */
      
        
    )  
    } catch {
        console.log("Could not find any equipments!")
    }
    
}