import { Link } from "react-router-dom"
import Wrapper from "../wrapper/CocktailCard"

const CocktailCard = ({drink}) => {
    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
// image = strDrinkThumb
// name = strDrink
// id = idDrink
// info = strAlcoholic
// glass = strGlass
return (
  <Wrapper>
    <div className="cocktail-card">
      <div className="drink-img">
        <img src={strDrinkThumb} alt={strDrink} className="drink-img-img"></img>
      </div>
      <div className="footer">
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="cocktail-detail-btn">
          Details
        </Link>
      </div>
    </div>
  </Wrapper>
)
}
export default CocktailCard