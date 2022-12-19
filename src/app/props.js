import React, { useState ,useEffect} from "react"
import axios from "axios";
import Footer from './footer';
import Headar from './headar';
import Setting from './setting';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import DataTable from 'react-data-table-component';
import { ModalHeader,Modal, ModalBody } from "reactstrap"; 


export default function Props(props) {
    const [refresh, setRefersh] = useState(false);

  const [users, setUsers] = useState({
    first_name: "",
    last_name: "",
    email: ""  
    
  });

  const { first_name,last_name, email} = users;
  const onInputChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
   alert("Done !!!");
    //  swal("licked the Good job!", "You!", "success");
  
    e.preventDefault();
    const result = await axios.post("http://localhost/reactjs_project/inster.php", users);

    setUsers(JSON.stringify(result));


    //const obj = JSON.parse(result);

    // if(JSON.stringify(result.data.success))  
    // {
    //   alert("Data saved success fully with the id "+result.data.newids);
    // }
    
    // //navigate.push("/");
  };


  
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
  }, [refresh]);

// end of the view all data contnet

const [model, setModel] = useState(false);

  return (
   <>
  <Modal
   size="sm"
        isOpen={model}
        toggle={()=>setModel(!model)}>

    <ModalHeader
         toggle={()=>setModel(!model)}>
      Add User
    </ModalHeader>
    <ModalBody>
    <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="first_name"
              value={first_name}
              onChange={e => onInputChange(e)}
            />
          </div>
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="last_name"
              value={last_name}
              onChange={e => onInputChange(e)}
            />
          </div>
   
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
    
          <button  className="btn btn-primary btn-block">Add User</button>
        </form>
    </ModalBody>

  </Modal>

  
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
                    <button className="btn mt-3" style={{backgroundColor:"White"}}  onClick={() =>setModel(true) } >
                    Add User
                   </button><br/>
                  
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
