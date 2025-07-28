import { useNavigate } from 'react-router-dom';
import './Course.css';
const Course = () => {
  const navigate = useNavigate();
    const students = [
    { name: 'John Doe', rollNo: '001', percentage: 85 },
    { name: 'Alice Smith', rollNo: '002', percentage: 78 },
    { name: 'Bob Johnson', rollNo: '003', percentage: 92 },
    { name: 'Smith', rollNo: '004', percentage: 94 },
  ];
  const gotodetail=()=>{
    console.log("Clicked");
    navigate('/detail');
  }
  return (
    <>
        <div id="student-div" >
      <h2>Course Information</h2>
      <table id="student-table">
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th>Course Name</th>
            <th>Code</th>
            <th>Class</th>
            <th id="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.percentage}%</td>
              <td id="actions">
                <div><button className='view-btn' onClick={gotodetail}>View</button></div>
                <div><button className='update-btn'>Update</button></div>
                <div><button className='delete-btn'>Delete</button></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Course