import React, { useState, useEffect } from "react";
import Layout from "./../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import SpinnerAnim from "../Components/shared/SpinnerAnim";
import { Link } from "react-router-dom";
import SearchBox from "../Components/SearchBox";

const HomePage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <SpinnerAnim />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!cocktails) {
    return (
     
      <h2
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "black", // Semi-transparent background
    color: "red", // Text color
    zIndex: 999, // Adjust the z-index as needed
  }}
>
  No Cocktail Found With This Name
</h2>

      
    );
  }
  return (
    <>
   <div className="drow justify-content-center">
      
   <div className="row">
  {modifiedCocktails.map((item) => (
    <div className="col-md-auto mt-10 m-2" key={item.id}>
      <div className="card" style={ {width: '18rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  overflow: 'hidden',}}>
        <img src={item.img} className="card-img-top" alt={item.name} style={{maxHeight: '200px'}} />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: '1.5rem',
  fontWeight: 'bold',}}>{item.name}</h5>
          <h5 className="card-title" style={{  fontSize: '1rem',
  color: 'gray',}}>{item.glass}</h5>
          <p className="card-text" style={{fontSize: '1rem',}}>{item.info}</p>
          <Link to={`/products/${item.id}`} className="btn btn-primary" style={{backgroundColor: '#007BFF',
  color: 'white',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '5px',
  display: 'inline-block',
  marginTop: '10px',}}>
            Details
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default HomePage;
