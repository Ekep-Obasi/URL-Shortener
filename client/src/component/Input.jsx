import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/appContext";
import shorten from "../services/shorten";
import { toast } from "react-toastify";
import validateUrl from "../utils/validate";

const StyledInput = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 50%;
    height: 65px;
    padding: 6px 12px;
    border: 1px solid #2196f3;
    border-radius: 16px 0 0 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #000;
    font-size: 1.2rem;
    z-index: 10;
    font-weight: 500;

    &::placeholder {
      color: #000;
      font-size: 18px;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    height: 79px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2196f3;
    padding: 0 7px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border: 2px solid #2196f3;
    cursor: pointer;
    border-radius: 0 16px 16px 0;
    z-index: 10;
  }
`;

export default function Input() {
  const navigate = useNavigate();
  const { isLoading, setShortUrl, setIsLoading } = useApp();

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateUrl(e.target.elements.url.value);
    if (!isValid) return;

    const id = toast.loading("Please wait...");
    setIsLoading(true);

    shorten(e.target.elements.url.value)
      .then((res) => {
        toast.update(id, {
          render: "Operation succesful!",
          type: "success",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          isLoading: false,
        });
        setShortUrl(res.data);
        navigate("/result");
        setIsLoading(false);
      })
      .catch((err) => {
        toast.update(id, {
          render: "Failed to shorten url!",
          type: "error",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          isLoading: false,
        });
        throw new Error(err);
      });
  }

  return (
    <StyledInput onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter the link here"
        name="url"
        disabled={isLoading}
      />
      <button type="submit">Shorten</button>
    </StyledInput>
  );
}
