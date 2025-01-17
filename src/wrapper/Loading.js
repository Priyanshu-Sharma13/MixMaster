import styled from "styled-components";

const Wrapper = styled.div`
  .loader {
    margin: auto;
    /* padding-top: 10vh; */
    border: 20px solid #eaf0f6;
    border-radius: 50%;
    border-top: 20px solid #ff7a59;
    width: 100px;
    height: 100px;
    animation: spinner 4s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper
