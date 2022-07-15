import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './container/Home';

function App() {
  return (
   
    <BrowserRouter>
      <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route exact path = "/home"    element = {<Home/>}/>
     

    </Routes>

    <Footer/>

</BrowserRouter>




  )  }

export default App;
