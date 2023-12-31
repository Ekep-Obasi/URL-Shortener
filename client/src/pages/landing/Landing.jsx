import React, { useContext } from "react";
import { Input } from "../../component";
import StyledWrapper from "./Landing.styles";
import { AppContext } from "../../context/appContext";

const Landing = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <StyledWrapper>
      <header>
        <h1>URL SHORTNER .</h1>
        <p>Please Paste Your URL To Be Shortened</p>
      </header>
      <Input />
    </StyledWrapper>
  );
};

export default Landing;
