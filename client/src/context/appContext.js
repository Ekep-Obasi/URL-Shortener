import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [shortUrl, setShortUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, shortUrl, setShortUrl }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp =() => useContext(AppContext);

export { AppContext };
