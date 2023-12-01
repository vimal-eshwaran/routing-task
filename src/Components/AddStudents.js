import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function AddStudents({students, setStudents}) {
  const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

const createStudent =  () =>{
    const newStudents = {
      name:name,
      batch:batch,
      qualification:qualification,
      gender: gender,
}


  setStudents([...students, newStudents])
  history.push("/students")
}

  return (
    <Base
    title={"Add New Student"}
    description={"We can able to add new students data here"}
    >
    <div>
        <input
        placeholder='Enter Name'
        type ="text"
        value = {name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        placeholder='Enter Batch'
        type ="text"
        value ={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />

        <input
        placeholder='Enter Gender'
        type ="text"  
        value ={gender}
        onChange={(e)=>setGender(e.target.value)}
        />

        <input
        placeholder='Enter Qualification'
        type ="text" 
        value= {qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />

        <Button variant='success'
        onClick={createStudent}
        >Add Students</Button>
    </div>
    </Base>
  )
}

export default AddStudents
