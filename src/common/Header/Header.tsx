import { TextInput } from "../TextInput/TextInput";
import { useState, useEffect } from 'react';

export const Header = () => {

  const [searchInfo, setSearchInfo] = useState("");

  useEffect(()=>{
    if(searchInfo !== ""){

      console.log("ahora la búsque vale......", searchInfo);
    }
  }, [searchInfo]);

  return (
    <>
      <TextInput 
        name = "search"
        type = "text"
        placeholder = "search a character..."
        state={setSearchInfo}  
      />
    </>
  );
};
