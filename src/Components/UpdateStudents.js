import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function UpdateStudents({students, setStudents}) {
    const {id} = useParams();
     const editStudent = students[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory();

    useEffect(()=>{
       setName(editStudent.name)
       setBatch(editStudent.batch)
       setGender(editStudent.gender)
       setQualification(editStudent.qualification)
    }, [editStudent])

    function updateStudent (){
         const updatedObject = {
            name : name,
            batch : batch,
            gender: gender,
            qualification :qualification
         }
     
         console.log(updatedObject)
         students[id] = updatedObject
         setStudents([...students])
         history.push("/students")
     }
    

  return (
    <Base
    title={"Edit a Student"}
    description={"Edit Stuudents data here"}
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
    onClick={updateStudent}
    >Update Students</Button>
</div>
</Base>
  )
}

export default UpdateStudents