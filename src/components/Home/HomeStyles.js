import styled, { keyframes } from "styled-components";
import backgroundImage from "../../images/background.jpeg";

const rainbowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const HomeWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    background-size: contain;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 100px !important;
  font-weight: bold !important; /* Use a bold font-weight */
  font-family: "Anton", sans-serif; /* Use the Anton font */
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #f06, #09f, #6f0, #f06);
  background-size: 400% 400%;
  animation: ${rainbowAnimation} 10s linear infinite;
  text-stroke: 5px white; /* Adjust text stroke as needed */

  @media (max-width: 768px) {
    font-size: 80px !important;
    text-stroke: 3px white; /* Adjust text stroke for smaller screens */

    h4 {
      font-size: 50px !important;
    }
  }

  @media (min-width: 1200px) {
    font-size: 120px !important;
    text-stroke: 7px white; /* Adjust text stroke for larger screens */

    h4 {
      font-size: 100px !important;
    }
  }
`;
