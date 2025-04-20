import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

const ContactForm = ({ addContacts, contacts }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const numberId = useId();
  const nameId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Name is too long")
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "The phone number must be in ***-**-** format"
      )
      .required("Phone number is required"),
  });

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    addContacts((prevContacts) => [...prevContacts, newContact]);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.formContainer}>
          <div className={css.inputGroup}>
            <label htmlFor={nameId} className={css.label}>
              Name
            </label>
            <Field
              name="name"
              type="text"
              id={nameId}
              className={css.inputField}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.inputGroup}>
            <label htmlFor={numberId} className={css.label}>
              Number
            </label>
            <Field
              name="number"
              type="text"
              id={numberId}
              className={css.inputField}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

          <button type="submit" className={css.submitButton}>
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
