export const initialState = {
  recipes: [],
  allRecipes: [],
  data: [],
  typediets: [],
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
   case "POST_RECIPE":
  const newRecipe = action.payload;
  const updatedRecipes = [...state.recipes, newRecipe];

  return {
    ...state,
    recipes: updatedRecipes,
  };
    case "GET_ALL_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case "ERROR_GETTING_RECIPES":
      return {
        ...state,
        error: action.payload,
      };
    
      case "FILTER_BY_TYPEDIET":
        const allRecDiet = state.allRecipes;
        const typeDietFilter = allRecDiet.filter((recipe) => {
          return recipe.Diets && recipe.Diets.some((diet) => diet.name === action.payload);
        });
        return {
          ...state,
          recipes: action.payload === "All" ? allRecDiet : typeDietFilter,
        };
      

    case "FILTER_CREATED":
      const allRecipes = state.allRecipes;
      const createdFilter =
        action.payload === "created"
          ? allRecipes.filter((el) => el.createdInDB)
          : allRecipes.filter((el) => !el.createdInDB);
      return {
        ...state,
        recipes: action.payload === "All" ? state.allRecipes : createdFilter,
      };

    case "ORDER_BY_NAME":
      let order =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: order,
      };

    case "ORDER_BY_PUNTUATION":
      let orderpunt =
        action.payload === "menormayor"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderpunt,
      };
    case "GET_BY_NAME":
      return {
        ...state,
        recipes: action.payload || [],
      };
    case "GET_BY_ID":
      return {
        ...state,
        data: action.payload,
      };
  
    case "GET_TYPE_DIETS":
      return {
        ...state,
        typediets: action.payload,
      };
    
      default:
      return state;
  }
}

export default reducer;
