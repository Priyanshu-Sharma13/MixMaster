import {NavLink} from 'react-router-dom'
import Wrapper from '../wrapper/Navbar'

// const Wrapper = styled.nav`
// .navbar-logo{
// color : green;
// background-color: black;
// margin
// }
// `


const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <div className="navbar-center">
          <div className="navbar-logo">MixMaster</div>
          <div className="navbar-links">
            <NavLink to="/" className="navbar-nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="navbar-nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="navbar-nav-link">
              Newsletter
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar