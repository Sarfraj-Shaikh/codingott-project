import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/component/Nav";
import Footer from "./component/Footer";
import Teachers from "./component/Teachers";

const App = () => {

  return (

    <div>

      <Nav />

        <Routes>

            <Route path="/" element={<h1>This Is HomePage</h1>}/>
            <Route path="/teachers" element={<Teachers />}/>

        </Routes>

      <Footer />

    </div>

  )

};

export default App