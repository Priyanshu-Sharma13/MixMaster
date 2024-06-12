import axios from "axios";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../wrapper/Cocktail";

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


// export const loader = async (data) => {  contain verv useful info
export const loader = async ({params}) => {
    console.log(params);
    const {id} = params;
    console.log(id);
    const response = await axios.get(`${cocktailSearchUrl}${id}`);
    console.log(response)
    const drink = response.data.drinks[0];
    return {id, drink}
} 

const Cocktail = () => {
  const { id, drink } = useLoaderData()
  const { idDrink : iD, strDrink : name, strDrinkThumb : image, strAlcoholic : info, strGlass: glass , strCategory : category, strInstructions : instructions} = drink
  console.log(drink);
//   image = strDrinkThumb
//   name = strDrink
//   id = idDrink
//   info = strAlcoholic
//   glass = strGlass

const validIngredients = Object.keys(drink).filter((key) => key.startsWith('strIngredient') && drink[key]).map((key) => drink[key]);

  return (
    <Wrapper>
      <div>
        <header className="cocktail-header">
          <Link to="/" className="cocktail-back-to-home-btn">
            Back Home
          </Link>
          <h3>{name}</h3>
        </header>
        <div className="cocktail-drink">
          <div className="cocktail-img-cont">
            <img src={image} alt={name} className="cocktail-img"></img>
          </div>
          <div className="drink-info">
            <p className="drink-desc">
              <span className="drink-data">Name :</span> {name}
            </p>
            <p className="drink-desc">
              <span className="drink-data">category :</span> {category}
            </p>
            <p className="drink-desc">
              <span className="drink-data">Info :</span> {info}
            </p>
            <p className="drink-desc">
              <span className="drink-data">Glass :</span> {glass}
            </p>
            <p className="drink-desc">
              <span className="drink-data">Ingredients :</span>{' '}
              {validIngredients.map((item, index) => {
                return (
                  <span className="ing" key={item}>
                    {item}
                    {index < validIngredients.length - 1 ? ',' : ''}
                  </span>
                )
              })}
            </p>
            <p className="drink-desc">
              <span className="drink-data">Instructions :</span> {instructions}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail
