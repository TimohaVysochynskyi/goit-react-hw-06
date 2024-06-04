import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.data}>
        <p className={css.row}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.row}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
