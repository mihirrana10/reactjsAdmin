import logo from './logo.svg';
import './App.css';
import Headar from './app/headar';
import Sidebar from './app/sidebar';
import Mainmenu from './app/mainmenu';
import { BrowserRouter, Route, Link, Router, Routes } from "react-router-dom";
import Buttons from './app/Basic UI Elements/buttons';
import Maincon from './app/maincon';
import Dropdown from './app/Basic UI Elements/dropdowns';
import Typography from './app/Basic UI Elements/typography';
import Icon from './app/icons/icons';
import Forms from './app/Forms/forms';
import Charts from './app/charts/charts';
import Tables from './app/tables/tables';





function App() {
  return (
<>
<BrowserRouter>
       
       <Routes>
         <Route path="/" element={<Maincon />} />
         <Route path="buttons" element={<Buttons />} />
         <Route path="dropdown" element={<Dropdown />} />
         <Route path="typography" element={<Typography/>} />
         <Route path="icons" element={<Icon/>}/>
         <Route path="forms" element={<Forms/>}/>
         <Route path="charts" element={<Charts/>}/>
         <Route path="tables" element={<Tables/>}/>




       </Routes>
     </BrowserRouter>
   
   
    

 
      
</> 
  );
}

export default App;