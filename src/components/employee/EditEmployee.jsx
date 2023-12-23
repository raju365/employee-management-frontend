import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  let navigate = useNavigate();

  const { eid } = useParams();

  const [employee,setEmployee]=useState({
    name:"",
    department:"",
    salary:""
  })
  const {name,department,salary}=employee
  const onInputChange=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})
  }


  useEffect(() => {
    loadEmployees();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/employee/pupdate?eid=${eid}`,employee);
    navigate("/");
  };

  const loadEmployees = async () => {
    const result = await axios.get(`http://localhost:8080/employee/details/${eid}`);
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                 Full Name
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
              <label htmlFor="lastName" className="form-label">
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
              <label htmlFor="emailId" className="form-label">
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