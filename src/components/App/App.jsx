import { useState, useEffect } from "react";

import initialContacts from "../../initialContacts.json";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const newContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
    console.log(newContact);
  };

  const deleteContact = (contactId) => {
    setContacts((prevTasks) => {
      return prevTasks.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((task) =>
    task.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={newContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
