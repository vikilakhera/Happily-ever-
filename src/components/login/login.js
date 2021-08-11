import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import "./login.css";

function Login() {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
      console.log(history);
        if(localStorage.getItem("token")){
          history.push(`/user`);
        }
      },[]);

    const handleLogin = (e) =>{
        e.preventDefault();
        if(userId === "admin" && userPassword === "12345"){
            localStorage.setItem("token", "T");
            history.push("/user");
        }  
    }

    return (
      <div className="login-container">
        <div className="form-container center">
          <form
            onSubmit={handleLogin}
            className="form-signin a1login-box fadeInUp"
          >
            <div className="inputbox">
              <input 
                type="text" 
                required="required"
                onChange={(event) => {
                  setUserId(event.target.value);
                }}
                />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <input 
                type="password" 
                required="required" 
                onChange={(event) => {
                  setUserPassword(event.target.value);
                }}
                />
              <span>Password</span>
            </div>
            <div className="inputbox">
              <button className="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default withRouter(Login);
