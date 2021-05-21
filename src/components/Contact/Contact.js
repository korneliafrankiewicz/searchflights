import React, { useState } from "react";
import "./Contact.scss";
import CheckIcon from "../../images/check.png";
import {Validate} from "./Validate";

export const Contact= () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [formInvalid, setFormInvalid] = useState(null);

    const { isValid, errorMessages } = Validate(name, email, phone);

    const handleSubmit = () => {
        if (isValid){
            alert("You're logged in!")
        } if(!isValid){
            // alert(setFormInvalid(errorMessages));
            alert("Data is not valid")
        } else {
            alert("Login in, please")
        }

        console.log(errorMessages)
    }


    return (
        <div className="container contact-form-wrapper">
                
                <form className="contact-form" >
                <h2 className="contact-form-title">Log in to buy tickets</h2>
                <label className="name">
                    <input type="text" className="feedback-input" placeholder="Name" id="name" value={name} 
                    onChange={e => setName(e.target.value)}/>
                </label>

                <label className="email">
                    <input type="text" className="feedback-input" id="email" placeholder="Email" value={email}
                     onChange={e => setEmail(e.target.value)}/>
                </label>

                <label className="phone">
                    <input type="text" className="feedback-input" placeholder="Phone number" id="phone" value={phone}
                    onChange={e => setPhone(e.target.value)}/>
                </label>

                <div className="submit-login">
                <img id="check" src={CheckIcon} width="50px" alt="check" onClick={handleSubmit}/> 
                </div>
                </form>
  </div>
    )
}