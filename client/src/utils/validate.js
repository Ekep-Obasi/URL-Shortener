import { toast } from "react-toastify";

export default function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    toast.error("Invalid URL");
    return false;
  }
}
