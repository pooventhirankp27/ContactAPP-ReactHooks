import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let navigate = useNavigate(); //Should not be declared inside local function/method

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const add = (e) => {
        e.preventDefault(); //Prevents reloading the page on click of add button       
        if (name === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        props.getContactInfo({ 'name': name, 'email': email }) //sending it to parent -App.js
        setName("");
        setEmail("");
        navigate("../", { replace: true }); //To navigate other pages
    }

    return (
        <div className="ui main" style={{ marginTop: "75px" }}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"
                        value={name}
                        onChange={handleNameChange} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                        value={email}
                        onChange={handleEmailChange} />
                </div>
                <button className="ui button blue">
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddContact;