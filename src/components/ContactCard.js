import React from "react";
import { useNavigate } from 'react-router-dom';
import aaa from '../images/aaa.JPG';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    let navigate = useNavigate(); //Should not be declared inside local function/method

    const toContactDetailsComponent = (action) => {
        if (action === 'edit') {
            navigate(`/edit`, { state: { contactInfo: props.contact } });
        }
        else {
            navigate(`/contactDetails/${id}`, { state: { contactInfo: props.contact } });
        }
    };

    return (
        <div className="item">
            <img className="ui avatar image" src={aaa} alt="aaa" />
            <div className="content">
                <a onClick={() => { toContactDetailsComponent('contactDetailsPage') }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </a>
                <div>
                    <i className="edit alternate outline icon"
                        style={{ color: "blue", marginTop: "7px" }}
                        onClick={() => { toContactDetailsComponent('edit') }}></i>

                    <i className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px" }}
                        onClick={() => props.clickHandler(id)}></i>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
