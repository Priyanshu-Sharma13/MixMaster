import styled from "styled-components"

const Wrapper = styled.div`
  .search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vh 0 2vh 0;
  }
  .search-input {
    width: 70%;
    font-size: 2.4vh;
    padding: 1vh 1vw;
    border: 1px solid rgb(131, 130, 130);
    border-radius: 0.6vh 0 0 0.6vh;
  }

  .search-submit-button {
    width: 30%;
    color: white;
    background-color: rgb(51, 248, 183);
    font-size: 2.4vh;
    padding: 1vh 0;
    font-weight: 500;
    border-radius: 0 0.6vh 0.6vh 0;
    border: 1px solid rgb(131, 130, 130);
  }
`;

export default Wrapper