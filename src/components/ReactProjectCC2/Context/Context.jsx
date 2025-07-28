import { createContext, useContext, useState } from "react";
import { getDataById } from "../API/Api";
const Detailcontext=createContext();
export const useDetail = () => {
  const context = useContext(Detailcontext);
  if (!context) {
    throw new Error("useDetail must be used within a DetailProvider");
  }
  return context;
};
export const DetailProvider=({children})=>{

  const [details,setDetails]=useState(null);
  // Provider component
  const fetchDetailsbyId=async(id)=>{
    try {
      const response = await getDataById(id);
      setDetails(response);
    } catch (error) {
      console.error("Error fetching detail data:", error);
    }

  };
  return(
    <Detailcontext.Provider value={{userDetails:details,fetchUserDetails: fetchDetailsbyId}}>
      {children}
    </Detailcontext.Provider>
  );
}