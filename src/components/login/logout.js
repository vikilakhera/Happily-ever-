import React from "react";
import {useHistory} from "react-router-dom";

function Logout (){
    const history = useHistory();
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/")
    }

    return(
        <div onClick={handleLogout} className="logout-container">
            <i className="fa fa-power-off"></i>
            <div className="logout-text">Logout</div>
        </div>
    )
}

export default Logout;