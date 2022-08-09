import styled from "styled-components";

export const SigninContent = styled.div`
  display: grid;
  place-items: center;
  padding: 15px 15px;
  hr {
    width: 50%;
  }
  .signinZone {
    display: grid;
    place-items: center;
    padding-top: 30px;
    width: 100%;
  }
  input {
    height: 35px;
    width: 50%;
    border-radius: 5px;
    border: solid 1px;
  }
  .loginButton {
    margin-top: 80px;
  }
  .loginButton > button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer ;
    border-radius: 5px;
  }
`;
