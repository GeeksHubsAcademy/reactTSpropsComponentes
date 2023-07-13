
import React, {useState, useEffect} from 'react';
import { Drop } from "../../common/Drop/Drop";

export interface DropProps {
  state:Function,
  titulo:string
}
export const Register = () => {

  const [drop, setDrop] = useState(false)

  useEffect(()=> {

    if(drop){
      console.log("Hombre");
    }else{
      console.log("Mujer");
    }


  },[drop]);

  return (
    <>
      <Drop 
        state={setDrop}
        titulo={`Sexo: `}
      />
    </>
  );
};
