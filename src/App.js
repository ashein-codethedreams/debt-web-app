import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./components/UI/NotFound";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NewList from "./features/NewList/AddNew";
import AllList from "./features/List/AllList";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>စာရင်း</title>
        </Helmet>
        <Routes>
          <Route exact path="/" element={<AllList />} />
          <Route exact path="/new" element={<NewList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
