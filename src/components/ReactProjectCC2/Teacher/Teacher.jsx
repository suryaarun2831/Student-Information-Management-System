import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../API/Api';

const Teacher = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const gotodetail = (id) => {
    console.log("Clicked");
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData();
        const filter = res.filter(user => user.role === 'TEACHER');
        setData(filter);
      } catch (err) {
        console.log("Teacher -> Not Loaded " + err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div id='student-search-container'>
        Teacher Name : 
        <input id='input-student-div' />
        <button id='search-student'>Search</button>
        <button id='add-student'>Add Teacher</button>
      </div>

      <div id="student-div">
        <h2>Teacher Information</h2>
        <table id="student-table">
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>User ID</th>
              <th id="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((teacher, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{teacher.teacher.name?.toUpperCase()}</td>
                <td>{teacher.email}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.user?.id}</td>
                <td id="actions">
                  <div><button className='view-btn' onClick={() => gotodetail(teacher.id)}>View</button></div>
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

export default Teacher;
