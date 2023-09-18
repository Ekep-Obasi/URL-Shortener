import { StyledInput, StyledWrapper } from "./Result.styles";
import { useApp } from "../../context/appContext";
import { toast } from "react-toastify";

const Result = () => {
  return (
    <StyledWrapper>
      <header>
        <h1>URL SHORTNER .</h1>
        <p>Here is your Shortened Password</p>
      </header>
      <Input />
    </StyledWrapper>
  );
};

const Input = () => {
  const { shortUrl } = useApp();

  const handleClick = (e) => {
    e.preventDefault();
    const copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    toast.success("Copied Text");
  };

  return (
    <StyledInput>
      <input
        type="text"
        id="myInput"
        value={shortUrl || "[An error Occured]"}
        contentEditable="false"
        onChange={() => {}}
      />
      <button type="submit" onClick={(e) => handleClick(e)}>
        Copy Text
      </button>
    </StyledInput>
  );
};

export default Result;
