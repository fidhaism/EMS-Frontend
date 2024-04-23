import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
// import { addEmployee } from '../../../ems-backend/Services/logic';

function Add() {
const baseurl = `http://localhost:8000`;
const navigate = useNavigate();
  //create a state to hold the employee details from the form
  const [id,setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

  const addEmployee=async()=>{
    //Check if ID is empty
    if(!id.trim()){
      alert("Enter Employee ID");
      return;
    }
    const body ={id,name,age, designation, salary }
    
    //api call to ADD employee details
    try{
      
    const result = await axios.post(`${baseurl}/api/add-employee`,body)
    console.log(result);
    alert(result.data.message);
    navigate('/') //redirect to Landing page
  }
  catch(error){
    alert("Enter a unique Employee Id")
  }
};
//console.log(id,name,age, designation, salary);
  return (
    <div>
      <h2 className='text-center m-4'>Add Employee Details</h2>
      
      <div className='card shadow m-5 p-5'>
        <Row>
          <Col>
      <FloatingLabel
        controlId="floatingInput"
        label="ID of employee"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="ID of Employee" onChange={(e)=> setId(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Name of employee"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Name of Employee" onChange={(e)=> setName(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Age of employee"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Age of Employee" onChange={(e)=> setAge(e.target.value)}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Designation of Employee"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Designation of Employee"onChange={(e)=> setDesignation(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Salary of Employee"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Salary of Employee" onChange={(e)=> setSalary(e.target.value)} />
      </FloatingLabel>


      <div className='text-center'>
        <button className='btn btn-primary px- py-2 ' onClick={addEmployee}>Add</button>
      </div>
      </Col>
      <Col>
      <img  style={{width:'550px', height:'550px'}}  src="https://static.vecteezy.com/system/resources/previews/027/684/644/non_2x/add-staff-member-icon-flat-vector.jpg" alt="image not found" />
      </Col>
      </Row>
      </div>
      
    </div>


  )
}

export default Add
