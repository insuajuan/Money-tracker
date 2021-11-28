import './operations.css';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { OperationsCall } from "../../apiCalls";
import OperationButton from '../operationButton/OperationButton';
import Operation from '../operation/Operation';


function Operations() {

    let [operations, setOperations] = useState([]);
    // const { user } = useContext(AuthContext);

    const fetchOperations = async () => {
        setOperations(await OperationsCall())
    }

    useEffect(() => {
        fetchOperations()
    }, []);

    return (
        <div>
            <OperationButton />
            {operations.map((op) => (
                <Operation key={op.uuid} operation={op}/>
            ))}
        </div>

        
    )
}

export default Operations
