import { Routes, Route } from "react-router-dom";

// Pages
import SeedMessage from "./pages/SeedMessage";
import Message from "./pages/Message";

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Message />} />
      <Route path="/seedmessage" element={<SeedMessage />} />
    </Routes>
  );
}
export default MyRoutes;
