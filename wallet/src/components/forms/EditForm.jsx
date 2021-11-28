import { OperationCall } from "../../apiCalls";
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


function EditForm() {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get(':')
    console.log(id)

    let [operation, setOperation] = useState([]);

    const fetchOperation = async () => {
        setOperation(await OperationCall(id))
    }

    useEffect(() => {
        fetchOperation()
    }, []);

    return (
        <div className="formContainer m-5">
                <form action="" className="d-flex">
                    <label for="exampleFormControlInput1" className="form-label">Img</label>
                    <h3>{operation.description}</h3>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>                    
                </form>
            
        </div>
    )
}

export default EditForm
