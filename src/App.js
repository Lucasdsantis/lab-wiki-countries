import { Routes, Route} from "react-router-dom";
import{ Navbar } from "./components/Navbar";
import{ SideMenu } from "./components/Sidemenu"
import { CountryPage } from "./Pages/CountryPages";


function App() {
  return (
    <div className="App">
    <Navbar /> 
    <div className= "d-flex">
    <SideMenu />
    <Routes>
      <Route path= "/:countryCode" element= {<CountryPage />} />
    </Routes> 
    </div> 
    </div>
  );
}

export default App;
