import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  let navigate=useNavigate()
  const [employee,setEmployee]=useState({
    name:"",
    department:"",
    salary:""
  })
  const {name,department,salary}=employee;
  const onInputChange=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/employee/create",employee)
    navigate("/")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Employee</h2>

          <form onSubmit={(e)=>onSubmit(e)}>
           
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                 Full name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your full name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
               
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Salary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your salary"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
               
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}