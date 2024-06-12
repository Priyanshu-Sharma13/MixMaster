import {Link, useRouteError} from  'react-router-dom'
import errorImg from '../images/error404.svg'
import Wrapper from '../wrapper/ErrorComp';


const ErrorComp = () => {
    const error = useRouteError();
    console.log(error);

    if(error.status === 404){
        return (
          <Wrapper>
            <section className="error-handle-404">
              <img
                src={errorImg}
                alt="paage not found"
                className="error-img-404"
              ></img>
              <h3 className="error-note">Ohh!</h3>
              <p className="error-note">
                We can't seem to find page you are looking for
              </p>
              <Link to="/" className="error-back-home-link">
                Back Home
              </Link>
            </section>
          </Wrapper>
        )
    }
  return (
    <Wrapper>
      <div>Something Went Wrong</div>
    </Wrapper>
  )
}
export default ErrorComp
