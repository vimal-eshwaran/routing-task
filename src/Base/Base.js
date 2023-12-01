import React from "react";
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Base = ({title, description, children}) => {
  const history = useHistory();
  return (
    <div className='main-component base-component'>
       
      <Button variant="success"
      onClick={()=>history.push("/")}
      >Dashboard</Button>

      <Button variant="success"
      onClick={()=>history.push("/students")}
      >Student-List</Button>

      <Button variant="success"
      onClick={()=>history.push("/add")}
      >Add-student</Button>

      <header>
            <h1 className='heading'>{title}</h1>
         </header>
         <main className='main-segment'>
             <h2>{description}</h2>
             <div>
               {children}
             </div>
         </main>
    </div>
  )
}

export default Base