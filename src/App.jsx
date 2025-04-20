import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
          { id: "id-5", name: "John Doe", number: "123-456-7890" },
          { id: "id-6", name: "Jane Smith", number: "987-654-3210" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContacts={setContacts} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <Contact contacts={filteredContacts} deleteContacts={setContacts} />
    </>
  );
}

export default App;
