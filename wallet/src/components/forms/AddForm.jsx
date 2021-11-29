import { OperationAdd } from "../../apiCalls";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddForm() {

    const navigate = useNavigate ();

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
        const body = {
            "date": "01/29/2020",
            "description": data.description,
            "amount": data.amount,
            "expense": "true"
        };
        OperationAdd(body)
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

export default AddForm