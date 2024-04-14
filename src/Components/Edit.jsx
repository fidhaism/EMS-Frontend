import React, {useEffect, useState} from 'react'
import { FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const baseurl = `http://localhost:8000`
    const navigate = useNavigate()

    // Create a state to hold the employee information from  database
    const [id,setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [designation, setDesignation] = useState('')
    const [salary, setSalary] = useState('')

  //get Particular employee
  const {empid} = useParams()
  console.log(empid)

  //get particular employee details
  const fetchEmployee=async()=>{
    const result = await axios.get(`${baseurl}/api/view-employee/${empid}`)
    console.log(result.data.employee)
    setId(result.data.employee.id);
    setName(result.data.employee.name);
    setAge(result.data.employee.age);
    setDesignation(result.data.employee.designation);
    setSalary(result.data.employee.salary);
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

// Update employee details
    const handleUpdate =async(e) => {
      const body={id,name,age,designation,salary}
        // e.preventDefault()
        console.log(id,name,age,designation,salary);
        const result = await axios.post(`${baseurl}/api/update-employee/${empid}`,body)
        console.log(result);
        alert(result.data.message)
        navigate('/')
      }

  return (
    <div>
      <h3 className='text-center m-4'>Update Employee Details</h3>
      <div className='card shadow m-5 p-5'>
        <FloatingLabel
          controlId="floatingInput"
          label="ID of employee"
          className="mb-3"
        >
          <Form.Control onChange={(e) => setId(e.target.value)} value={id} type="text" placeholder="ID of Employee" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Name of employee"
          className="mb-3"
        >
          <Form.Control onChange={(e) => setName(e.target.value)} value={name}  type="text" placeholder="Name of Employee" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Age of employee"
          className="mb-3"
        >
          <Form.Control value={age} type="text" placeholder="Age of Employee" onChange={(e) => setAge(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Designation of Employee"
          className="mb-3"
        >
          <Form.Control  onChange={(e) => setDesignation(e.target.value)} value={designation} type="text" placeholder="Designation of Employee" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Salary of Employee"
          className="mb-3"
        >
          <Form.Control onChange={(e) => setSalary(e.target.value)} value={salary} type="text" placeholder="Salary of Employee" />
        </FloatingLabel>
        <div>
          <button onClick={handleUpdate} className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Edit
