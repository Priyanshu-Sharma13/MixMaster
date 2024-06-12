import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomeLayout ,{loader as homeLoader} from './pages/HomeLayout';
import About from './pages/About';
import Cocktail , {loader as singleCocktailLoader}from './pages/Cocktail';
import NewsLetter , {action as newsLetterAction} from './pages/NewsLetter'
import Home from './pages/Home';
// import Error from './pages/Error';
import { Link, useRouteError } from 'react-router-dom'
import errorImg from './images/error404.svg'
import ErrorComp from './pages/ErrorComp'
import SinglePageError from './pages/SinglePageError';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorComp />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
        errorElement: <SinglePageError></SinglePageError>,
        loader: homeLoader,
      },
      {
        path: 'about',
        element: <About></About>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: 'newsletter',
        element: <NewsLetter></NewsLetter>,
        action: newsLetterAction,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: 'cocktail/:id',
        loader : singleCocktailLoader, 
        element: <Cocktail></Cocktail>,
        errorElement: <SinglePageError></SinglePageError>,
      },
    ],
  },
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
};



// const Error = () => {
//   const error = useRouteError()
//   // console.log(error)

//   // if (error.status === 404) {
//   //   return (
//   //     <section>
//   //       <img src={errorImg} alt="paage not found"></img>
//   //       <h3>Ohh!</h3>
//   //       <p>We can't seem to find page you are looking for</p>
//   //       <Link to="/">Back Home</Link>
//   //     </section>
//   //   )
//   // }
//   // return <div>Something Went Wrong</div>
//   return <ErrorComp error={error}></ErrorComp>
// };



export default App;
