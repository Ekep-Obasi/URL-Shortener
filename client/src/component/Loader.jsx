import styled from "@emotion/styled";
import React from "react";
import { MutatingDots } from "react-loader-spinner";

const StyledLoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const Loader = ({ visibility }) => {
  return (
    <StyledLoaderWrapper>
      <MutatingDots
        height="100"
        width="100"
        color="black"
        secondaryColor="blue"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visibility}
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
