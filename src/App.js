import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';




function App(props) {

  return (
<>
<Header/>


<Routes>
<Route path='' element={<Home/>}></Route>
</Routes>


<Footer/>
</>


  )


}

export default App;





