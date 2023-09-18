import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./context/appContext";
import { Home, Results } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
