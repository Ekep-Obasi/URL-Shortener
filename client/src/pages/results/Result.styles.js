import styled from "@emotion/styled";

const StyledInput = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 50%;
    height: 75px;
    padding: 0 12px;
    border: 1px solid #42ba96;
    border-radius: 16px 0 0 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #000;
    font-size: 20px;
    font-style: italic;

    &:focus {
      outline: none;
    }
  }

  button {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42ba96;
    padding: 0 7px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border: 2px solid #42ba96;
    cursor: pointer;
    border-radius: 0 16px 16px 0;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #fff;

  header {
    position: absolute;
    top: 4rem;

    h1 {
      margin: 25px 12px 0 0;
      font-size: 52px;
      font-family: "Alkatra", cursive;
      text-shadow: -1px 3px 4px rgba(0, 0, 0, 1);
    }

    p {
      font-size: 22px;
      margin-bottom: 25px;
      font-family: sans-serif;
    }
  }
`;

export { StyledWrapper, StyledInput };
