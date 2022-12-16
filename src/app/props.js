import React, { useState ,useEffect} from "react"
import axios from "axios";
import Footer from './footer';
import Headar from './headar';
import Setting from './setting';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import DataTable from 'react-data-table-component';



export default function Props(props) {
  
  
    const name = props.name;
    const tool = props.tool;
   
    //Show full Date and Time
    const [date, setdate] = useState(Date());

// View All Data in Phpmyadmin Database
const [user, setUser] = useState([]);

const Viewusers = async () => {
    const result = await axios.get("http://localhost/reactjs_project/view.php");
    setUser(result.data.phpresult);
   // console.log(result.data.result);

  };

  useEffect(() => {
    Viewusers();
  }, []);

// end of the view all data contnet



  return (
   <>
         <div className="container-scroller">
    <Sidebar></Sidebar>
      <div className="container-fluid page-body-wrapper">
        <Setting></Setting>
       <Headar></Headar>
        <div className="main-panel">
        <div class="mx-auto" style={{width: "400px"}}>
        <br/><br/><br/>
        
          <h1>My Name Is (using Props) <b>{name}</b>.</h1>
          <p>My favorite design tool is <b>{tool}</b>.</p>
          <br/>
          <p>My Time is (using useState)<br/> {date}!</p>
          </div>
          <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Data View</h4>
                   
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                       {
                          
                          user.map((res)=>

                              <tr>
                                      <td>{res.id}</td>
                                      <td>{res.first_name}</td>
                                      <td>{res.last_name}</td>
                                      <td>{res.email}</td>
                                      <td>
                                        
                                        <Link className="btn btn-outline-primary ml-2"  style={{color: "black"}} to={"EditUser/"+res.id}>Edit</Link> {'\u00A0'}
                                    

                                      </td>
                                    
                              </tr>

                      )}
                        </tbody>
                       
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          {/* <Footer></Footer> */}
        </div>
       
      </div>
     
    </div>
   </>
  )
}
