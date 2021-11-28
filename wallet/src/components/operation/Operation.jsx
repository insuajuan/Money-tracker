import './operation.css';
// import { useContext, useState, useEffect } from 'react';
// import { AuthContext } from "../../context/AuthContext"
// import { OperationCall } from "../../apiCalls"

function Operation(operation) {

    return (
        <div>           
            <div className="operationsContainer mt-2">
                <div className="operation d-flex container-fluid justify-content-between">
                    <h3>{operation.date}</h3>
                    <h3>{operation.thumbnail}</h3>
                    <h3>{operation.description}</h3>
                    <h3>${operation.amount}</h3>
                </div>
            </div>
        </div>

        
    )
}

export default Operation
