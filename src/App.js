import logo from './logo.svg';
import './App.css';
import Headar from './app/headar';
import Sidebar from './app/sidebar';
import Mainmenu from './app/mainmenu';
import { BrowserRouter as Route, Link, Router, Routes } from "react-router-dom";
import Buttons from './app/Basic UI Elements/buttons';





function App() {
  return (
<>
      
   
    <div className="container-scroller">
    <Sidebar/>
      <div className="container-fluid page-body-wrapper">
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close mdi mdi-close"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-default-theme">
            <div className="img-ss rounded-circle bg-light border mr-3"></div> Default
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3"></div> Dark
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles light"></div>
            <div className="tiles dark"></div>
          </div>
        </div>
        <Headar/>
        <Mainmenu/>
        
     
      </div>
   </div>
    

 
      
</> 
  );
}

export default App;
