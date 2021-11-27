import './topbar.css';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Topbar() {
    return (
        <div className="topbarContainer d-flex justify-content-around align-items-center bg-primary">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">MT</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="walletOption d-flex">
                    <h3>Wallet</h3>
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className="topbarRight">
                <div className="userIcon">
                    <h3>User</h3>
                </div>
            </div>
        </div>
    )
}

export default Topbar