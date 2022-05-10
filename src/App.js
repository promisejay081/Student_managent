import { useState } from "react";
import Image from './assest/10.jpg'
const App = () =>{
const [firstname, setfirstname] = useState('');
const [lastname, setlastname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [allStudents, setallStudents] = useState([]);
const [editMode, seteditMode] = useState(false)
const [currentIndex, setcurrentIndex] = useState(0)
// const handlefirstname = (e)=>{
//   setfirstname(e.target.value)
// console.log(firstname);
// };
const addStudent=()=>
{
  let newStudent = {firstname,lastname,email,password}
  setallStudents([...allStudents,newStudent])
  setfirstname('')
  setlastname('')
  setemail('')
  setpassword('')

  console.log(newStudent)
} 

const deleteStudent = (index) =>
{
  let newAllStudents = [...allStudents]
  let updatedStudents = newAllStudents.filter((val,ind)=>(ind!=index))
  setallStudents(updatedStudents)
}

const editStudent= (index)=>{
  seteditMode(true)
  let newAllStudents = [...allStudents]
  let currentStudent = newAllStudents[index]
  let {firstname, lastname, email, password}=currentStudent
  setfirstname(firstname)
  setlastname(lastname)
  setemail(email) 
  setpassword(password)
  setcurrentIndex(index)
}

const updateDetails=()=>
{
  let newAllStudents = [...allStudents]
  let changedDetails = {firstname, lastname, email, password}
  newAllStudents[currentIndex]=changedDetails
  setallStudents(newAllStudents)
  seteditMode(false)
}

  return(
    <div>
      <header></header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 border-right">
            {editMode == false ?  <h1 className="card-header"> Add a student</h1> : <h1 className="card-header"> Edit a student</h1>}
          {/* //  <h1 className="card-header"> Add a student</h1> */}

           <input type="text" placeholder="First Name" className="form-control mb-3 " onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>

           <input type="text" placeholder="Last Name" className="form-control mb-3" onChange={(e)=>setlastname(e.target.value)} value={lastname}/>

           <input type="email" placeholder="Email Name" className="form-control mb-3" onChange={(e)=>setemail(e.target.value)} value={email}/>

           <input type="password" placeholder="Password" className="form-control mb-3" onChange={(e)=>setpassword(e.target.value)} value={password}/>

           {editMode ==false?   <button className="btn btn-info w-25" onClick={addStudent}>Submit </button> :   <button className="btn btn-success w-25" onClick={updateDetails}>Update </button>}
          
          </div>

          <div className="col-6 vh-100">
              <h1>List of Students</h1>
              <table className="table table-striped table-border">
                
                
                <thead>
                <tr>
                  <td>S/N</td>
                  <td>Firstname</td>
                  <td>Last Name</td>
                  <td>Email</td>
                  <td>Action</td>
                  </tr>
                  </thead>
                
                
              {allStudents.map((val,index)=>
              (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>deleteStudent(index)}>Delete</button>
                  </td>
                <td>
                  <button className="btn btn-success" onClick={()=>editStudent(index)}>Edit</button>
                </td>

                </tr>
              )
              )}
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
