import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import BlogDetails from "./components/BlogDetails";


function App() {

  return (
    <BrowserRouter>
    <>

      <Navbar />
      
      <Routes>
      
      <Route path="/home" element={<Home/>} / >
    

      <Route path="/input" element={<Input/>} /> 

      <Route path="/blogs/:id" element={<BlogDetails/>} /> 

      </Routes>      
      
      </>
    </BrowserRouter>
  )
}

export default App
