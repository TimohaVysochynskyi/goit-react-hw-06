import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(10, "Too long!")
    .required("Required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const id = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.group}>
            <label htmlFor={`${id}-name`}>Name:</label>
            <Field
              type="text"
              className={css.input}
              id={`${id}-name`}
              name="name"
              placeholder="Bohdan PrivatBank"
            />
            <ErrorMessage
              className={css.error}
              name="name"
              component="span"
            ></ErrorMessage>
          </div>
          <div className={css.group}>
            <label htmlFor={`${id}-number`}>Number:</label>
            <Field
              type="number"
              className={css.input}
              id={`${id}-number`}
              name="number"
              placeholder="067-226-8591"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            ></ErrorMessage>
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
