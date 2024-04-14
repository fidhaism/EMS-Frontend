import React, { useEffect, useState } from 'react'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function Admin() {
  const baseurl = `http://localhost:8000`

  const [employeeData, setEmployeeData] = useState([])

  // ADD EMPLOYEE
  const fetchData = async () => {
    const response = await axios.get(`${baseurl}/api/get-all-employee`)
    console.log(response.data.employees);
    setEmployeeData(response.data.employees)
  }
  console.log(employeeData);

  // DELETE EMPLOYEE
  const handleDelete = async (id)=>{
    const response = await axios.delete(`${baseurl}/api/delete-employee/${id}`)
    console.log(response);
    alert(response.data.message)
    fetchData() // to refresh the data

  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <h4 className='text-center m-4'>Empowering Organizations with Intuitive Employee Management</h4>
      <Row>
        <Col>

          <p style={{ textAlign: 'justify' }} className='px-5'>
            "Manage your organization's employee data effortlessly with our Employee Management System.
            With a clean, intuitive interface, you can quickly see important information about your employees,
            including their names and designations. Our system provides easy-to-use buttons for viewing, editing, and deleting
            employee information, as well as adding new employees.
            <br />
            <br />
            Our Employee Management System offers a user friendly interface that's accessible to users of all abilities.
            the employee information is displayed in a clean, organized layout, with each employee card showing their name, designation, and a set of action buttons.
            <br />
            <br />
            Use the "ADD" button in the top-right corner to add a new employee. The employee cards are laid out in a grid, with each card showing essential information about the employee.
            <br />
            <br />
            The action buttons on each employee card allow you to quickly view, edit, and delete employee information.
            The buttons are clearly labeled and easy to use, so you can manage your employee data with confidence.
            <br />
            <br />
            Try our Employee Management System today and see how it can help you streamline your employee management process!

          </p>
        </Col>
        <Col>
          <img src="https://img.freepik.com/premium-vector/happy-business-colleagues-team-portrait_179970-1271.jpg" alt="" className='p-3' />
        </Col>
      </Row>



      <Row className='p-5'>
        <h4 className='text-center m-3'> Manage your employee data</h4>
        <Link to={"add"}>
          <button style={{ float: 'right', margin: '10px' }} className='btn btn-primary'>
            <i className="fa-solid fa-address-card fa-lg"></i> ADD
          </button>
        </Link>
        <div className='d-flex flex-row flex-wrap'>
          {
            employeeData.map((item) => (
              <Col key={item.id} md='4' className='mb-4'>
                <Card className="border rounded" style={{ width: "18rem", height: "250px", marginBottom: "16px" }}>
                  <Card.Body className="d-flex align-items-center">
                    <ListGroup variant="flush">
                      <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                      <ListGroup.Item>Designation: {item.designation}</ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-evenly">

                        <Link to={`view/${item.id}`}>
                          <button className="btn" style={{ backgroundColor: "#007bff", color: "white" }}>
                            <i className="fa-solid fa-eye text-white"></i>
                          </button>
                        </Link>

                        <Link to={`edit/${item.id}`}>
                        <button className="btn" style={{ backgroundColor: "#ffc107", color: "white" }}>
                          <i className="fa-solid fa-pen text-white"></i>
                        </button>
                        </Link>
                        
                        <button className="btn" onClick={()=>handleDelete(item.id)} style={{ backgroundColor: "#dc3545", color: "white" }}>
                          <i className="fa-solid fa-trash text-white"></i>
                        </button>

                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </div>


      </Row>
    </div>

  )
}

export default Admin
