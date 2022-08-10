import React from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import aaa from '../images/aaa.JPG';

const ContactDetails = () => {
    let location = useLocation();
    let userId = useParams();
    console.log(userId); //Taking value from params - URL. Return type is object - userId.id
    return (
        <div className="main" style={{ marginTop: "75px" }}>
            <div className="ui card centered">
                <div className="image">
                    <img src={aaa} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{location.state.contactInfo.name}</div>
                    <div className="description">{location.state.contactInfo.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetails;
