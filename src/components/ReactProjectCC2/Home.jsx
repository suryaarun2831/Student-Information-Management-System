import { Divider } from '@mui/material';
const Dashboard = () => {
  const dashboardStyles = {
    marginTop: '100px',
    marginLeft: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
    backgroundImage: "url('')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '610px', 
    width: '90%', 
  };

  return (
    <>
    
    <div style={dashboardStyles}>
      <div style={{fontSize:'25px',marginLeft:'100px',marginTop:'200px',height:'230px',width:'700px',backgroundColor:'ghostwhite',borderRadius:'10px',padding:'20px',border:'1px solid grey'}}>
      Welcome !!!, where learning meets inspiration. Explore our diverse academic programs, vibrant campus life, and cutting-edge research 
      opportunities. Join a community dedicated to excellence, innovation, and personal growth. Discover your potential with us. Embrace a transformative educational journey that shapes your future. Welcome to [College Name]."
      </div>
        </div>
        <>
          <p style={{ width:'100%',background:'lightgrey',marginTop:'5px',textAlign:'center'}}>
            <p>More Information</p>
            <Divider/>
            Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
        <p style={{marginTop:'10px'}}>  © 2023 [Your Institution Name]. All Rights Reserved. | </p>
         <p> Privacy Policy | </p>
         <p>Terms of Use | </p>
         <p>Contact Us: support@exampleuniversity.com | </p>
         <p>Accessibility | </p>
         <p> Disclaimer</p>

         <p>Connect with us: [Social Media Icons]</p>
        </p>
       
        </>
    </>
  );
};

export default Dashboard;
