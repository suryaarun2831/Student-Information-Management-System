import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../ReactProjectCC2/About';
import Admin from '../ReactProjectCC2/Admin/Admin';
import Course from '../ReactProjectCC2/Course/Course';
import Detail from '../ReactProjectCC2/Detail/Detail';
import Home from '../ReactProjectCC2/Home';
import Loginpage from '../ReactProjectCC2/Loginpage';
import Navbar from '../ReactProjectCC2/Navbar';
import Register from '../ReactProjectCC2/Register';
import Sidebarhome from '../ReactProjectCC2/Sidebarhome';
import Student from '../ReactProjectCC2/Student/Student';
import Studentusername from '../ReactProjectCC2/Studentusername';
import Teacher from '../ReactProjectCC2/Teacher/Teacher';
const LoginRouting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const isHomePage = ['/home', '/student', '/academics', '/admin','/placements', '/teacher', '/about','/go','/course']
    .includes(location.pathname) || location.pathname.startsWith('/detail');

  return (
    <>
      {isHomePage && (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebarhome isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}

      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/go' element={<Studentusername />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/student' element={<Student/>} />
        <Route path='/teacher' element={<Teacher/>} />
        <Route path='/course' element={<Course/>} />  
        <Route path='/about' element={<About/>} />  
        <Route path='/detail/:id' element={<Detail/>} />  
      </Routes>
    </>
  );
};

export default LoginRouting;
