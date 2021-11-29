import { OperationCall, OperationEdit } from "../../apiCalls";
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


function EditForm(props) {
    
    const navigate = useNavigate ();

    const [searchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    const id = params.op;

    let [operation, setOperation] = useState([]);

    const fetchOperation = async () => {
        setOperation(await OperationCall(id))
    };

    useEffect(() => {
        fetchOperation()
    }, [] );

 
    const [data, setData] = useState({
        date: '',
        description: '',
        amount: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
        const body = {
            "date": "01/29/2020",
            "description": data.description,
            "amount": data.amount,
            "expense": "true"
        };
        OperationEdit(id, body)
        navigate("/")
    }

    return (
        <div className="formContainer m-4">
            <form className="d-flex-row" onSubmit={handleSubmit}>
            <div className="row align-items-center p-2">
                <div className="col-md-3">
                    <label className="col-form-label">Date</label>
                </div>
                <div className="col-md-6">
                    <input 
                    type="date" 
                    className="form-control" 
                    id="dateInput" 
                    name="date" 
                    placeholder={operation.date}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>            
            <div className="row align-items-center p-2">
                <div className="col-md-3">
                    <label className="col-form-label">Description</label>
                </div>
                <div className="col-md-6">
                    <textarea 
                    className="form-control" 
                    id="descriptionInput" 
                    name="description"
                    placeholder={operation.description}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>            
            <div className="row align-items-center p-2">
                <div className="col-md-3">
                    <label className="col-form-label">Amount $</label>
                </div>
                <div className="col-md-6">
                    <input 
                    type="number" 
                    className="form-control" 
                    id="amountInput" 
                    name="amount"
                    placeholder={operation.amount}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>           
            <div className="col-md-3 ps-2 mt-5">
                <button className="btn btn-primary" type="submit">Send</button>
            </div> 
            </form>
        </div>
    )
}

export default EditForm
