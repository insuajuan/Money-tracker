import './topbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from "../../context/AuthContext";

function Topbar() {

    const { user } = useContext(AuthContext);

    return (
        <div className="topbarContainer d-flex justify-content-around align-items-center bg-primary">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">MT</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="walletOption d-flex">
                    <a href="/">Wallet</a>
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