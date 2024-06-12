import styled from "styled-components";

const Wrapper = styled.div`
  .newsletter {
    padding: 6vh 6vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form {
    /* box-sizing: border-box; */
    background-color: white;
    border-radius: 0.7vh;
    width: 400px;
    padding: 3vh 3vw 4vh 3vw;
    box-shadow: 1px 2px 5px 2px rgba(220, 218, 218, 0.5);
  }
  .newsletter-head {
    font-family: 'calibri';
    color: rgb(57, 248, 184);
    font-size: 3.4vh;
    text-align: center;
    margin: 0;
    padding-bottom: 2vh;
  }
  .form-row {
    padding-bottom: 2vh;
    /* box-sizing: border-box; */
  }
  .form-label {
    font-family: 'Calibri';
    color: rgb(88, 87, 87);
    font-size: 2.8vh;
  }
  .form-input {
    box-sizing: border-box;
    width: 100%;
  }
  .form-button {
    /* margin: 0 3vw; */
    width: 100%;
    text-align: center;
    background-color: rgb(55, 248, 184);
    border: 0.2px solid rgb(171, 167, 167);
    border-radius: 0.5vh;
    padding: 1vh 0;
  }
`;
export default Wrapper