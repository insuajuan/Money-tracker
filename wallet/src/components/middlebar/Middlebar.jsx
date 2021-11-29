import './middlebar.css';

function Middlebar() {
    return (
        <div className="middlebarContainer d-flex justify-content-around align-items-center bg-light">
            <div className="middlebarLeft">
                <h3>$ Ingresos</h3>
            </div>
            <div className="middlebarCenter">
                
            </div>
            <div className="middlebarRight">
                <h3>$ Egresos</h3>
            </div>
        </div>
    )
}

export default Middlebar