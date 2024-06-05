import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/store";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <div className={css.container}>
        <input
          type="text"
          className={css.input}
          placeholder="Find ppl here"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
