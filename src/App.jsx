import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SinglePhotoPage from "./pages/SinglePhotoPage/SinglePhotoPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos/:id" element={<SinglePhotoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
