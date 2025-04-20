import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.formContainer}>
      <div className={css.inputGroup}>
        <label htmlFor="search" className={css.label}>
          Find contacts by name
        </label>
        <input
          id="search"
          type="text"
          className={css.inputField}
          placeholder="Search..."
          value={filter}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
