import axios from 'axios';
const url="http://127.0.0.1:8080/api/users";
export const getData =async()=> {
    try
    {
        const res = await axios.get(`${url}`);
        return res.data;
    }
    catch(err)
    {   
        console.log(err);
        throw err;
    }
}
export const getDataById =async(id)=> {
    try
    {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    catch(err)
    {   
        console.log(err);
        throw err;
    }
}
export const postData = async(data)=>{
    try{
        const res=await axios.post(`${url}/register`,data);
        return res.data;
    }
    catch(err){ console.log("Not able to Post Data: "+err)}
}
