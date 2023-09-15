import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Products from "./components/Products"
import About from "./components/About"
import Signup from "./components/Signup"



function App() {  

  return (

    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
    
  )
}


export default App
