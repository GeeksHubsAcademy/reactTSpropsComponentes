
import {useState, useEffect} from 'react';
import { Drop } from "../../common/Drop/Drop";
import { TextInput } from "../../common/TextInput/TextInput";
import { Button } from 'react-bootstrap';
import { registerMe } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';


export interface DropProps {
  state:Function,
  titulo:string
}

export interface UserData {
  id: number,
  name: string,
  surname: string, 
  age: number,
  userId: number
}

export const Register = () => {

  const navigate = useNavigate();

  const [drop, setDrop] = useState(false);

  const [userData, setUserData] = useState<UserData>({
    id: 0,
    name: "",
    surname: "",
    age: 0,
    userId: 0
  })

  const [userError, setUserError] = useState({
    id: 0,
    name: "",
    surname: "",
    age: 0,
    userId: 0
  })

  useEffect(()=> {

    if(drop){
      console.log("Hombre");
    }else{
      console.log("Mujer");
    }


  },[drop]);

  useEffect(()=>{
    console.log(userData);
  },[userData]);

  const keepData = () => {

    registerMe(userData)
      .then(
        respuesta => {
          if(respuesta.id !== 0){
            //Quiere decir que si me he podido registrar....
            setTimeout(()=> {
              navigate("/login");
            },750)
          }
        }
      )
      .catch(error => console.log(error))


  }

  return (
    <>
      <Drop 
        state={setDrop}
        titulo={`Sexo: `}
      />
      <TextInput
          name="id"
          type="text"
          placeholder="write your id..."
          design={userError.id ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
          state={setUserData}
          errorState={setUserError}
      />
      <TextInput
          name="name"
          type="text"
          placeholder="write your name..."
          design={userError.name ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
          state={setUserData}
          errorState={setUserError}
      />
      <TextInput
          name="surname"
          type="text"
          placeholder="write your surname..."
          design={userError.surname ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
          state={setUserData}
          errorState={setUserError}
      />
      <TextInput
          name="age"
          type="text"
          placeholder="write your age..."
          design={userError.age ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
          state={setUserData}
          errorState={setUserError}
      />
      <TextInput
          name="userId"
          type="text"
          placeholder="write your userId..."
          design={userError.userId ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
          state={setUserData}
          errorState={setUserError}
      />
      <Button onClick={()=>keepData()}>CLICK AND REGISTER ME!</Button>
    </>
  );
};
