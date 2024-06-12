import CocktailCard from "./CocktailCard"
import Wrapper from "../wrapper/CocktailList"
const CocktailList = ({drinks}) => {
  if(!drinks){
    return (
      <Wrapper>
        <div>
          <h4 className="error-statement">
            No cocktail matched for this name...
          </h4>
        </div>
      </Wrapper>
    )
  }


    return (
      <Wrapper>
        <div className="cocktail-card-list">
          {drinks.map((drink) => {
            return (
              <div key={drink.idDrink}>
                <CocktailCard key={drink.idDrink} drink={drink} />
              </div>
            )
          })}
        </div>
      </Wrapper>
    )
}
export default CocktailList