import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {

  const navigate = useNavigate();
  const [task, setTask] = useState('') 


  // semding data to mongo db
  const postingData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/task', {
      method: "POST",
      body: JSON.stringify({ task }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    result = await result.json();
    console.log(result)

    navigate("/post")

  }

  // getting data from mongodb


  const [taskData, setTaskData] = useState([]);



  const getUserData = async () => {
    let result = await fetch("http://localhost:5000/task")
    result = await result.json();
    setTaskData(result)
  }
  
  
  
  useEffect(() => {
    getUserData()
  })
  
  
  const deleteTask = async (id) => {
    let res = await fetch(`http://localhost:5000/task/${id}`, {
      method: "delete"
    })
    res = await res.json();
    if (res) {
      getUserData()
      window.location.reload()
    }
    
  }
  
  return (
    <>
      <div className='row'>
        <div className="col-3">

        </div>
      </div>

      <div className=" p-5">

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">MERN Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning" />
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form className="row g-3">
              <div className="col-md-8">

                <input type="text" onChange={(e) => setTask(e.target.value)} className="form-control" placeholder='todo title of the list one' id="input1" />
              </div>

              <div className="col-md-4">
                <button type="submit" onClick={postingData} to="/post" className="btn btn-primary">ADD</button>
              </div>
            </form>

            <>
            

      {    
                taskData.map((p) => {

              

                return (
                  <div className="card  my-3">
                  <div className="card-body">
                  <span className="card-title me-5" ><strong>{p.task}</strong></span>
                  
                  <button type="button" className="btn btn-success float-end order-first">Edit</button>
                
                  <button type="button" onClick={() => deleteTask(p._id)} className="btn btn-danger float-end me-2  order-last">Delete</button>
                  </div>
                  </div>
                
                  
                  )

                  
                })}
            
        
            </>
            
            
           
               
          </div>
        </div>
      </div>

    </>
  )
}

export default Post