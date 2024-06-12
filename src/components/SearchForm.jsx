import { useNavigation } from "react-router-dom"
import Wrapper from "../wrapper/SearchForm";
const SearchForm = ({searchTerm}) => {
  const submiting = useNavigation()
  const isSearching = submiting.state === 'submitting'
    return (
      <Wrapper>
        <div className="search-form">
          <form className="form">
            <input
              type="search"
              className="search-input"
              name="search"
              defaultValue={searchTerm}
            ></input>
            <button type="submit" className="search-submit-button">
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
      </Wrapper>
    )
}
export default SearchForm