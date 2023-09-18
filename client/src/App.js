import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./context/appContext";
import { Home, Results } from "./pages";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Home />} index />
            <Route element={<Results />} path="/result" />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
