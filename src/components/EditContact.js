import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EditContact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let location = useLocation();

    useEffect(() => {
        if (!!location.state) {
            setName(location.state.contactInfo.name);
            setEmail(location.state.contactInfo.email);
        }
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const update = (e) => {
        e.preventDefault();
        props.editContactInfo({ ...location.state.contactInfo, name: name, email: email });
    };

    return (
        <div className="ui main" style={{ marginTop: "75px" }}>
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
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
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditContact;
