import React, { useState ,useEffect} from "react"
import Headar from './headar'
import Mainmenu from './mainmenu'
import Sidebar from './sidebar'

export default function  Maincon() {
    const [isOpen, setIsopen] = useState(false);

    const Maincon = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

  return (
    
    <>
<div className="container-scroller ">

<div className={`minimize ${isOpen == true ? 'active' : ''}`} >
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
              <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
              <a className="sidebar-brand brand-logo-mini pl-4 pt-3" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <ul className="nav">
              <li className="nav-item nav-profile">
                <a href="#" className="nav-link">
                  <div className="nav-profile-image">
                    <img src="assets/images/faces/face1.jpg" alt="profile" />
                    <span className="login-status online"></span>
                  </div>
                  <div className="nav-profile-text d-flex flex-column pr-3">
                    <span className="font-weight-medium mb-2">Henry Klein</span>
                    <span className="font-weight-normal">$8,753.00</span>
                  </div>
                  <span className="badge badge-danger text-white ml-3 rounded">3</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <i className="mdi mdi-home menu-icon"></i>
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                  <span className="menu-title">Basic UI Elements</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/icons/mdi.html">
                  <i className="mdi mdi-contacts menu-icon"></i>
                  <span className="menu-title">Icons</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/forms/basic_elements.html">
                  <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                  <span className="menu-title">Forms</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/charts/chartjs.html">
                  <i className="mdi mdi-chart-bar menu-icon"></i>
                  <span className="menu-title">Charts</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/tables/basic-table.html">
                  <i className="mdi mdi-table-large menu-icon"></i>
                  <span className="menu-title">Tables</span>
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <span className="menu-title">Docs</span>
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.bootstrapdash.com/demo/breeze-free/documentation/documentation.html">
                  <i className="mdi mdi-file-document-box menu-icon"></i>
                  <span className="menu-title">Documentation</span>
                </a>
              </li>
              <li className="nav-item sidebar-actions">
                <div className="nav-link">
                  <div className="mt-4">
                    <div className="border-none">
                      <p className="text-black">Notification</p>
                    </div>
                    <ul className="mt-4 pl-0">
                      <li>Sign Out</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
     </nav>
  </div>
     
      

      <div className="container-fluid page-body-wrapper">
          <i className="settings-close mdi mdi-close"></i>
       
          <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
          <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
            <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" onClick={Maincon} >
              <i className="mdi mdi-menu"></i>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count count-varient1">7</span>
                </a>
                <div className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list" aria-labelledby="notificationDropdown">
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face4.jpg" alt="" className="profile-pic" />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0"> Dany Miles <span className="text-small text-muted">commented on your photo</span>
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face3.jpg" alt="" className="profile-pic" />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0"> James <span className="text-small text-muted">posted a photo on your wall</span>
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face2.jpg" alt="" className="profile-pic" />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0"> Alex <span className="text-small text-muted">just mentioned you in his post</span>
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0">View all activities</p>
                </div>
              </li>
              <li className="nav-item dropdown d-none d-sm-flex">
                <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count count-varient2">5</span>
                </a>
                <div className="dropdown-menu navbar-dropdown navbar-dropdown-large preview-list" aria-labelledby="messageDropdown">
                  <h6 className="p-3 mb-0">Messages</h6>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow">
                      <span className="badge badge-pill badge-success">Request</span>
                      <p className="text-small text-muted ellipsis mb-0"> Suport needed for user123 </p>
                    </div>
                    <p className="text-small text-muted align-self-start"> 4:10 PM </p>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow">
                      <span className="badge badge-pill badge-warning">Invoices</span>
                      <p className="text-small text-muted ellipsis mb-0"> Invoice for order is mailed </p>
                    </div>
                    <p className="text-small text-muted align-self-start"> 4:10 PM </p>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow">
                      <span className="badge badge-pill badge-danger">Projects</span>
                      <p className="text-small text-muted ellipsis mb-0"> New project will start tomorrow </p>
                    </div>
                    <p className="text-small text-muted align-self-start"> 4:10 PM </p>
                  </a>
                  <h6 className="p-3 mb-0">See all activity</h6>
                </div>
              </li>
              <li className="nav-item nav-search border-0 ml-1 ml-md-3 ml-lg-5 d-none d-md-flex">
                <form className="nav-link form-inline mt-2 mt-md-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-magnify"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right ml-lg-auto">
              <li className="nav-item dropdown d-none d-xl-flex border-0">
                <a className="nav-link dropdown-toggle" id="languageDropdown" href="#" data-toggle="dropdown">
                  <i className="mdi mdi-earth"></i> English </a>
                <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown">
                  <a className="dropdown-item" href="#"> French </a>
                  <a className="dropdown-item" href="#"> Spain </a>
                  <a className="dropdown-item" href="#"> Latin </a>
                  <a className="dropdown-item" href="#"> Japanese </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown border-0">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown">
                  <img className="nav-profile-img mr-2" alt="" src="assets/images/faces/face1.jpg" />
                  <span className="profile-name">Henry Klein</span>
                </a>
                <div className="dropdown-menu navbar-dropdown w-100" aria-labelledby="profileDropdown">
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-cached mr-2 text-success"></i> Activity Log </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        
    
      </div>
     
    </div>
  
        
     
   
    </>
  )
}
