import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";
import Mid from "./Show";
import Fetch from "./Fetch";
import Show from "./Show";
import Delete from "./Delete";


function App() {
  return ( 
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path="/fetch" element={<Fetch/>}></Route>
        <Route path="/show" element={<Show/>}></Route>
        <Route path="/delete/:id" element={<Delete/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
   );
}

export default App;