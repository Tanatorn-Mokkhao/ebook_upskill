import styled from "styled-components";

export const BodyBackGround = styled.div`
  display: block;
  position: fixed;
  background-color: rgb(255, 255, 255);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background: -webkit-radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 9999;
`;

export const BoxContainer = styled.div`
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 490px;
  height: 590px;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  background-color: rgb(255, 255, 255);
  min-height: 100%;
  min-width: 100%;
`;
