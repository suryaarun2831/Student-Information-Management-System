import { useState } from 'react';
import { postData } from '../API/Api';
const AddStudent = () => {
    const [Data,setData]=useState({
        'username':'',
        'password':'',
        'role':'STUDENT',
        'studentName':'',
        'rollNo':''
    });
    const handleChange = (e)=>{
        setData({...Data,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=>{
        try{
            const res=await postData(Data);
            alert(res);
        }
        catch(err){}
    }
  return (
    <>
        
    </>
  )
}

export default AddStudent