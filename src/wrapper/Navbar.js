import styled from "styled-components";

const Wrapper = styled.div`
  .navbar-center {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;

    margin: 0%;
  }
  .navbar-logo {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: 6vh;
    padding: 2vh 0 2vh 6vw;
    color: rgb(37, 252, 181);
  }
  .navbar-links {
    right: 0;
    font-size: 4vh;
    padding: 3vh 5vw 3vh 0;
  }
  .navbar-nav-link {
    text-decoration: none;
    color: rgb(177, 174, 174);
    padding-right: 3vw;
    font-size: 3vh;
    font-family: Arial, Helvetica, sans-serif;
  }
  .active {
    color: rgb(37, 252, 181);
  }
  @media screen and (max-width: 600px) {
    .navbar-center {
      flex-direction: column;
    }
    .navbar-links {
      display: grid;
      margin: 0 0 2vh 8vw;
    }
    .navbar-nav-link {
      padding-bottom: 1vh;
    }
  }
`;

export default Wrapper