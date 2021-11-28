import './operationbutton.css';

function operationButton() {

    const handleClick = (e) => {
        const button = 'material-button-toggle'
        alert(button)
        // button.toggleClass('open');
        // button.toggleClass('scale-on');
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="material-button-anim">
                    <ul className="list-inline" id="options">
                        <li className="option">
                        <button className="material-button option1" type="button">
                            <span className="fa fa-phone" aria-hidden="true"></span>
                        </button>
                        </li>
                        <li className="option">
                        <button className="material-button option2" type="button">
                            <span className="fa fa-envelope-o" aria-hidden="true"></span>
                        </button>
                        </li>
                    </ul>
                    <button className="material-button material-button-toggle" type="button" onClick={handleClick}>
                        <span className="fa fa-plus" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
            </div>
        </div>        
    )
}

export default operationButton
