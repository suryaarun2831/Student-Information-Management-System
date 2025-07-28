import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SidebarHome = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const sidebarStyle = {
    width: '240px',
  };

  const listItemStyle = {
    paddingLeft: '24px',
  };
  const goInfo = () => {
    navigate('/student');
    toggleSidebar();
  };

  const goteacher=()=>{
    navigate('/teacher');
    toggleSidebar();
  }
  const goexams=()=>{
    navigate('/exams');
    toggleSidebar();
  }
  const goadmin=()=>{
    navigate('/admin');
    toggleSidebar();
  }
  const goplacement=()=>{
    navigate('/placements');
    toggleSidebar();
  }
  const goabout=()=>{
    navigate('/about');
    toggleSidebar();
  }
  const gocourse=()=>{
    navigate('/course');
    toggleSidebar();
  }

  return (
    <>
    <Drawer variant="temporary" anchor="left" open={isOpen} onClose={toggleSidebar}>
      <div style={sidebarStyle}>
          <div >
            <PermIdentityIcon style={{height:'70px',width:'70px',border:'2px solid black',borderRadius:'50%',marginLeft:'50px'}}></PermIdentityIcon></div>
        <List>
          <ListItem button onClick={goInfo} style={listItemStyle}>
            <ListItemText primary="Student Information" />
          </ListItem>
          
          <ListItem button  onClick={goteacher} style={listItemStyle}>
            <ListItemText primary="Teacher" />
          </ListItem>
          <ListItem button  onClick={gocourse} style={listItemStyle}>
            <ListItemText primary="Course" />
          </ListItem>
          <ListItem button  onClick={goadmin} style={listItemStyle}>
            <ListItemText primary="Administrator" />
          </ListItem>
          <ListItem button  onClick={goabout} style={listItemStyle}>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
      </div>
      </Drawer>
      </>
  );
};

export default SidebarHome;
