import { useRouteError } from "react-router-dom"
import Wrapper from "../wrapper/SinglePageError";
const SinglePageError = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <Wrapper>
      <div className="error-cont">
        <div className="single-page-error">{error.message}</div>
      </div>
    </Wrapper>
  )
}
export default SinglePageError