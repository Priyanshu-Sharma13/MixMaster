import Navbar from "../components/Navbar"
import {Outlet, useNavigation, useOutletContext} from 'react-router-dom'
import Loading from "../components/Loading";

const Home = () => {
    const value = 'some value';
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
  return (
    <div>
      <Navbar />
      <section className="outlet">
        {isPageLoading ? (
            <Loading/>
        ) : (
          <Outlet context={{ value }} />
        )}
        {/* <Outlet /> */}
      </section>
    </div>
  )
}
export default Home

//this value passed in outlet can be accesed in any children by using 
// const data = useOutletContext();
// console.log(data)