import './operationbutton.css';
import { useNavigate } from 'react-router-dom';

function OperationButton() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/add")
    }

    return (
        <div className="container-fluid d-flex align-middle m-5">
            <button className="btn btn-primary align-middle" type="button" onClick={handleClick}>
                +
            </button>
        </div>    
    )
}

export default OperationButton