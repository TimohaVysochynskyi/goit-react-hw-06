import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const handleChange = (evt) => {
    onFilter(evt.target.value);
  };

  return (
    <>
      <div className={css.container}>
        <input
          type="text"
          className={css.input}
          placeholder="Find ppl here"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
