import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./components/UI/Layout";
import NotFound from "./components/UI/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
        <Route exact path="/new" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
