import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../API/Api';
import './Student.css';
const Student = () => {
  const [data,setData]=useState([]);
  const navigate = useNavigate();
 
  const gotodetail=(id)=>{
    console.log("Clicked");
    navigate(`/detail/${id}`);
  }
  useEffect(()=>{
    const DataHandle=async()=>{
      try{ 
        const res=await getData();
        const filtered = res.filter(user => user.role === 'STUDENT');

        setData(filtered);
      }
      catch(err){console.log("Student -> Not Loaded"+err);}
    };
    DataHandle();
  },[]);
  
  return (
    <>
    <div id='student-search-container'>
      Student Name : 
        <input id='input-student-div'/>
        <button id='search-student'>Search</button>
  
        <button id='add-student'>Add Student</button>
    </div>
    <div id="student-div" >
      <h2>Student Information</h2>
      <table id="student-table">
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Attendance</th>
            <th id="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{student.username.toUpperCase()}</td>
              <td>{student.student.rollNo}</td>
              <td>{student.student.email}</td>
              <td>{student.student.attendance} %</td>
              <td id="actions">
                <div><button className='view-btn' onClick={()=>{gotodetail(student.id)}}>View</button></div>
                <div><button className='update-btn'>Update</button></div>
                <div><button className='delete-btn'>Delete</button></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Student;
