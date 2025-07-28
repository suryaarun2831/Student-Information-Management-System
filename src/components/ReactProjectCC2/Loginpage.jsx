import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate('/register');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='containerlogin'>
          <div>
            <label>Enter username</label>
            <input type='text' onChange={(event) => { setUsername(event.target.value) }} required />
          </div>
          <div>
            <label>Enter password</label>
            <input type='password' required />
          </div>
          <div>
            <Button variant="contained" type='submit'>Login</Button>
          </div>
          <div>
            Don't Have an Account?
            <Button variant="contained" style={{ marginLeft: '5px' }} onClick={onHandleRegister}>Register</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Loginpage;
