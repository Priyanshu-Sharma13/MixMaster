import styled from "styled-components";

const Wrapper = styled.div`
  .cocktail-header {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 5vh;
  }
  .cocktail-back-to-home-btn {
    background-color: rgb(68, 250, 190);
    border: 1px solid rgb(188, 188, 188);
    color: white;
    padding: 1vh 2vw;
    border-radius: 3px;
    text-decoration: none;
  }

  .cocktail-drink {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3vh 6vw 3vh 6vw;
  }
  .cocktail-img-cont {
    /* width: 40vw; */
    max-width: 350px;
    max-height: 400px;
    border-radius: 0.7vh;
    overflow: hidden;
    box-shadow: 1px 2px 5px 2px rgba(220, 218, 218, 0.5);
  }
  .cocktail-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .drink-info {
    box-sizing: border-box;
    max-width: 60vw;
    padding: 3vh 3vw;
  }

  .drink-desc {
    color: rgb(147, 146, 146);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 2.5vh;
  }
  .drink-data {
    font-family: 'Calibri';
    color: rgb(42, 41, 41);
    font-size: 2.8vh;
    font-weight: 500;
  }

  @media screen and (max-width: 700px) {
    .cocktail-drink {
      display: grid;
    }
  }
`;

export default Wrapper