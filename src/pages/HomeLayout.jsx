import axios from "axios"
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";


const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


export const loader = async ({request}) => {
    console.log(request);
    const url = new URL(request.url);
    console.log(url.searchParams.get('search') )
    const searchTerm = url.searchParams.get('search') || '';
    
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    console.log(response.data);
    return {drinks : response.data.drinks, searchTerm};
}

const HomeLayout = () => {
    const {drinks, searchTerm} = useLoaderData()


  return (
    <div>
        <SearchForm searchTerm = {searchTerm}/>
        <CocktailList drinks = {drinks}/>
    </div>
  )
}
export default HomeLayout