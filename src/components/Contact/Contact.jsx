import css from "./Contact.module.css";
import { HiUser } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";

const Contact = ({ contacts, deleteContacts }) => {
  return (
    <div className={css.contact}>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <div>
              <p>
                <HiUser style={{ marginRight: "10px" }} />
                {name}
              </p>
              <p>
                <HiOutlinePhone style={{ marginRight: "10px" }} />
                {number}
              </p>
            </div>
            <div>
              <button
                className={css.deleteButton}
                type="button"
                onClick={() =>
                  deleteContacts((prevContacts) =>
                    prevContacts.filter((contact) => contact.id !== id)
                  )
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
