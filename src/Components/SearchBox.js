import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../Redux/features/cocktailSlice";
// import "./Search.css"; 
const SearchBox = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktails({ searchText }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
     <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem', // Adjust the top margin as needed
  }}
>
  <form
    onSubmit={handleSubmit}
    style={{
      textAlign: 'center', // Center-align the form content
      maxWidth: '350px', // Set a maximum width for the form
    }}
  >
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="email"
        ref={searchTerm}
        onChange={handleChange}
        className="form-control"
        placeholder="Search.."
        style={{
          width: '100%', // Make the input field width 100%
          padding: '0.5rem', // Add some padding
          borderRadius: '5px', // Add rounded corners
          border: '1px solid #ccc', // Add a border
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
          fontSize: '1rem', // Adjust font size
        }}
      />
    </div>
  </form>
</div>

    </>
  );
};

export default SearchBox;
