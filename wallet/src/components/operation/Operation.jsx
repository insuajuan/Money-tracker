import './operation.css';
import axios from 'axios';
import { useState } from 'react';

const baseURL = "/wallet/:op_id"

function Operations() {
    // const [post, setPost] = useState(null);

    // try {
    //     axios.get(baseURL)
    //       .then(function (response) {
    //         setPost(response.data)
    //       })
    //   } catch (err) {
    //     console.log(err);
    //   };

    return (
        <div>
            <div className="buttonContainer m-5 d-flex justify-content-center">
                <button type="button" className="btn-lg btn-success">+</button>
            </div>
            
            <div className="operationsContainer mt-2">
                <div className="operation d-flex container-fluid justify-content-between">
                    <h3>date</h3>
                    <h3>img</h3>
                    <h3>description</h3>
                    <h3>$ 111</h3>
                </div>
                <div className="operation d-flex container-fluid justify-content-between">
                    <h3>date</h3>
                    <h3>img</h3>
                    <h3>description</h3>
                    <h3>$ 111</h3>
                </div>
            </div>
        </div>

        
    )
}

export default Operations
