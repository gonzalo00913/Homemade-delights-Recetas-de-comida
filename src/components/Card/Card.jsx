import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipesById } from "../../redux/actions";
import Style from "../Card/card.module.css";

const Card = ({ recipe, getRecipesById }) => {
  
  const handleRecipeClick = () => {
    getRecipesById(recipe.id);
  };

  return (
    <div className={Style.card}>
   
      <img className={Style.cardImage} src={recipe.image} alt={recipe.name} />
      <Link to={`/detail/${recipe.id}`} onClick={handleRecipeClick}>
      <h2 className={Style.cardName}>{recipe.name}</h2>
      </Link>

    <div >

    </div>
  </div>
  );
};

export default connect(null, { getRecipesById })(Card);
