import styled from "@emotion/styled";

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

export default StyledWrapper;