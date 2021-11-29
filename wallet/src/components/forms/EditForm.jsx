import { OperationCall, OperationEdit } from "../../apiCalls";
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


function EditForm() {

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
            date: data.date,
            description: data.description,
            amount: data.amount,
            expense: true
        };
        OperationEdit(id, body)
        console.log(data.date)

    }

    return (
        <div className="formContainer m-4">
            <form className="d-flex-row" onSubmit={handleSubmit}>
            <div className="row align-items-center">
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
                    />
                </div>
            </div>            
            <div className="row align-items-center">
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
                    />
                </div>
            </div>            
            <div className="row align-items-center">
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
                    />
                </div>
            </div>           
            <div className="col-md-3">
                <button className="btn btn-primary" type="submit">Send</button>
            </div> 
            </form>
        </div>
    )
}

export default EditForm
