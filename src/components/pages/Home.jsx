import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  const { eid } = useParams();

  useEffect(() => {
    // fetchData();
    loadEmployees();
    // console.log("hello");
  }, []);
//   get eamployee list data form database
  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employee/list");
    setEmployees(result.data);
    console.log(result.data);
  };

  
 

  // delete employee data from database
  const deleteEmployee = async (eid) => {
    await axios.delete(`http://localhost:8080/employee/delete/byid?eid=${eid}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Employee Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.eid}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewEmployee/${employee.eid}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/EditEmployee/${employee.eid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.eid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}