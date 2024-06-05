import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100%;
  background-color: aliceblue;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 40px;
  

  input {
    padding: 16px 250px;
    margin-right: 20px;
    font-size: 23px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    padding-left: 20px;

    &:focus {
    outline: 0;
  }

  }

  button {
    padding: 15px 30px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    font-size: 20px;

    &:focus {
    border: 1px solid #fff;
    outline: 0;
  }
  }

`;

export const ButtonGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  left: 30%;

  button {
    padding: 20px 100px;
    margin: 5px 30px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      font-weight: bold;
    }

    &:focus {
    outline: 0;
  }
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
  text-align: left;
  width: 70%;
  margin: auto;

  h2 {
    font-size: 23px;
    margin-bottom: 16px;
    margin-top: 25px;
    border-bottom: 1px solid #000; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }

  ul {
    list-style:none;
    padding: 0;
    font-size: 16px;
  }

  ul > li {
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 15px;
    background-color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: normal;
    padding: 8px;
  }

  span a {
    font-size: 18px;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;