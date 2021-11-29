import './operations.css';
import { useState, useEffect } from 'react';
import { OperationsCall } from "../../apiCalls";
import OperationButton from '../operationButton/OperationButton';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


function Operations() {

    let [operations, setOperations] = useState([]);
    const navigate = useNavigate ();

    const fetchOperations = async () => {
        setOperations(await OperationsCall())
    }

    useEffect(() => {
        fetchOperations()
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const opId = e.target.id
        navigate(`/edit/?op=${opId}`)
    }


    return (
        <div>
            <OperationButton />
                {operations.map((op) => (
                    <div key={op.uuid} className="operationsContainer mt-2" >
                        <div className="operation d-flex container-fluid justify-content-between" id={op.uuid} onClick={handleClick}>
                            <h3 id={op.uuid} onClick={handleClick}>{op.date}</h3>
                            <h3 id={op.uuid} onClick={handleClick}>{op.description}</h3>
                            <h3 id={op.uuid} onClick={handleClick}>${op.amount}</h3>
                            <button><DeleteIcon/></button>
                        </div>
                    </div>
                ))}
        </div>

        
    )
}

export default Operations
