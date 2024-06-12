import styled from "styled-components";

const Wrapper = styled.div`
  .error-handle-404 {
    display: grid;
    align-items: center;
    text-align: center;
  }
  .error-img-404 {
    width: 100vw;
    height: 60vh;
    object-fit: contain;
  }
  .error-back-home-link {
    text-decoration: none;
    color: rgb(45, 252, 183);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3vh;
    padding: 1vh;
  }
  .error-note {
    font-size: 3vh;
    margin: 0;
    padding: 2vh 2vh 1vh 2vh;
  }
`;

export default Wrapper