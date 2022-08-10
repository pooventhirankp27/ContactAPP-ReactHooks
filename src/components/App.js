import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ErrorPage from './ErrorPage';
import ContactDetails from './ContactDetails';
import api from '../api/contacts';
import EditContact from './EditContact';
import UseRefHookExample from './UseRefHookExample';
import ContextHookCompA from './ContextHookCompA';
import MemoHookCompA from './MemoHookCompA';
import CallBackHookExample from './CallBackHookExample';
import ReducerHookExample from './ReducerHookExample';
import CustomHooksExample from './CustomHooksExample';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //Retrieve contacts from API
  const retrieveContactsFromAPI = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contactInfo) => {
    console.log("AddContact.js to App.js - Child to Parent ===> ", contactInfo);

    const request = {
      id: uuid(),
      ...contactInfo
    }

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);

    // setContacts([...contacts, { id: uuid(), ...contactInfo }]); //State will not persist the data. 
    //We need to use localstorage to persist the data
  };

  const editContactHandler = async (request) => {
    const response = await api.put(`/contacts/${request.id}`, request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {

    //Delete through API
    await api.delete(`contacts/${id}`);

    //ContactCard.js to ContactList.js to App.js - Child to Parent to Parent
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (!!retrieveContacts && retrieveContacts.length > 0) setContacts(retrieveContacts);

    const getAllContactsFromAPI = async () => {
      const allContats = await retrieveContactsFromAPI();
      if (!!allContats && allContats.length > 0) setContacts(allContats);
    };
    getAllContactsFromAPI();

  }, []);

  //Whenever value changes useEffet helps to render the component again.
  //In the below code, contacts is called dependency
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className='ui container'>
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><ContactList contacts={contacts} getContactId={removeContactHandler} /></>} />
          <Route path="/add" element={<><Header /><AddContact getContactInfo={addContactHandler} /></>} />
          <Route path="/edit" element={<><Header /><EditContact editContactInfo={editContactHandler} /></>} />
          <Route path="/contactDetails/:id" element={<><Header /><ContactDetails /></>} />
          <Route path="/useRefHookExample" element={<UseRefHookExample />} />
          <Route path="/useContextHookExample" element={<ContextHookCompA />} />
          <Route path="/useMemoHookExample" element={<MemoHookCompA />} />
          <Route path="/useCallbackHookExample" element={<CallBackHookExample />} />
          <Route path="/useReducerHookExample" element={<ReducerHookExample />} />
          <Route path="/customHookExample" element={<CustomHooksExample />} />
          <Route path="*" element={<ErrorPage />} /> {/* If path is invalid (http://localhost:3000/aaa),
                                                         it will route to error page */}
        </Routes>
      </Router>
      {/* <Header />
      <AddContact getContactInfo={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
