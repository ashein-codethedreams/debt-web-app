import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./components/UI/Layout";
import NotFound from "./components/UI/NotFound";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>စာရင်း</title>
        </Helmet>
        <Routes>
          <Route exact path="/" element={<MainLayout />} />
          <Route exact path="/new" element={<MainLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
