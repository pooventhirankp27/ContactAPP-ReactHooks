import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContacctList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler}
                key={contact.id} />
        );
    });

    return (
        <div className="main" style={{ marginTop: "75px" }}>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className="ui celled list">
                {renderContacctList}
            </div>
        </div>
    )
}

export default ContactList