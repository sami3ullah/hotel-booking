import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ListHotels from "./pages/list-hotels/ListHotels";
import HotelPage from "./pages/hotel-page/HotelPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<ListHotels />} />
      <Route path="/hotels/:id" element={<HotelPage />} />
    </Routes>
  );
}

export default App;
