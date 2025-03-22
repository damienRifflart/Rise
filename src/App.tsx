import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reco from "./pages/Reco";
import Todo from "./pages/Todo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reco" element={<Reco />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
