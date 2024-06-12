import styled from 'styled-components'

const Wrapper = styled.div`
  .cocktail-card-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100vw;
    gap: 40px;
    padding: 4vh 3vw;
  }
  .cocktail-card {
    width: 290px;
    background-color: white;
    border-radius: 0.7vh;
    overflow: hidden;
    box-shadow: 1px 2px 5px 2px rgba(220, 218, 218, 0.5);
  }
  .cocktail-card:hover {
    box-shadow: 4px 6px 7px 2px rgba(186, 185, 185, 0.5);
    /* z-index: 2; */
  }
  .drink-img {
    width: 100%;
    height: 200px;
    /* overflow: hidden; */
  }
  .drink-img-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    /* overflow: hidden; */
  }
  .cocktail-card .footer {
    /* text-align: center; */
    margin: 0;
    color: rgb(90, 89, 89);
    padding: 3vh 2vw;
    /* background-color: azure; */
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .cocktail-card .footer h4 {
    font-size: 3vh;
    margin: 0;
    padding-bottom: 0.8vh;
  }
  .cocktail-card .footer h5 {
    margin: 0;
    font-weight: 500;
    padding-bottom: 0.8vh;
  }
  .cocktail-card .footer p {
    margin: 0;
    font-size: 2vh;
    padding-bottom: 0.8vh;
  }
  .cocktail-detail-btn {
    text-decoration: none;
    color: rgb(19, 244, 169);
    font-weight: 500;
    font-size: 2.4vh;
  }
  .error-statement {
    text-align: center;
    padding-top: 10vh;
  }
`

export default Wrapper
