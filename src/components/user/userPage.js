import React, { useState } from "react";
import Logout from "../login/logout";
import "./userPage.css";

function UserPage() {
  const [image, setImage] = useState(null);
  const [input, setInput] = useState({
    name: "",
    religion: "",
    height: ""
  })

  const handleImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const handleInput = (event) => {
    let nam = event.target.name;
    let value = event.target.value;

    if(nam === "name"){
      setInput(prevState => ({
        ...prevState,
        name: value
      }))
    }
    else if(nam === "Reliion"){
      setInput(prevState => ({
        ...prevState,
        religion: value
      }))
    }
    else if(nam === "height"){
      setInput(prevState => ({
        ...prevState,
        height: value
      }))
    }
  }

  return (
    <div className="container">
      <div className="user-container">
        <Logout />
        <div className="input-container">
          <div className="input-parts">
            <div className="label">Upload Image</div>
            <input type="file" name="myImage" onChange={handleImage} />
            {image === null ? (
              <div></div>
            ) : (
              <img className="uploaded-img" src={image} />
            )}
          </div>
          <div className="input-parts">
            <div className="label">Name</div>
            <input onChange={handleInput} type="input" name="name" placeholder="Enter Name" />
          </div>
          <div className="input-parts">
            <div className="label">Date of Birth</div>
            <input type="date" name="dob" placeholder="Enter D.O.B" />
          </div>
          <div className="input-parts">
            <div className="label">Religion</div>
            <input onChange={handleInput} type="input" name="name" placeholder="Enter Religion" />
          </div>
          <div className="input-parts">
            <div className="label">Height</div>
            <input onChange={handleInput} type="input" name="name" placeholder="Enter Height" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
