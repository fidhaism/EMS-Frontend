import React, { useEffect, useState } from 'react'
// import Row from 'react-bootstrap/esm/Row'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { baseurl } from './baseurl'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function View() {

  const [userData, setUserData] = useState({})
  const baseurl = `http://localhost:8000`;

  const {id} = useParams() // get an id
  const viewEmployee=async()=>{
    const result = await axios.get(`${baseurl}/api/view-employee/${id}`);
    console.log(result.data.employee) 
    setUserData(result.data.employee)
  }

  useEffect(() => {
      viewEmployee(); 
      }, [])

  return (
    <div>
      <h3 className='text-center m-4'> View employee Details</h3>
      <Row>
        <Col>
          <div className='card shadow m-5 p-4'>
            <p>Employee Id: {userData.id}</p>
            <p>Employee Name : {userData.name}</p>
            <p>Age of Employee:{userData.age}</p>
            <p>Designation : {userData.designation}</p>
            <p>Salary: {userData.salary}</p>

            <a href="/" className='btn btn-primary'> Back to Home</a>
          </div>
        </Col>
        <Col>
          <img style={{ width: 'auto', height: '500px' }} 
          src="https://cdn-icons-png.flaticon.com/256/8999/8999092.png" alt="image not found" />
        </Col>
      </Row>
    </div>
  )
}

export default View
