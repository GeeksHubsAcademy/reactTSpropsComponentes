
import { useState, useEffect } from 'react';

import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from 'react-router-dom';
import { profileUser } from '../../services/apiCalls';

export const Profile = () => {

    //Conecto a REDUX en modo lectura
    const reduxUserCredentials = useSelector(userData);

    const [userDataApi, setUserDataApi] = useState({
        id: 0,
        name: "",
        surname: "", 
        age: 0,
        userId: 0
    })
    const navigate = useNavigate();

    useEffect(()=>{

        if(!reduxUserCredentials.credentials?.token){
            navigate("/");
        };

        if(reduxUserCredentials.credentials.id){
            //llamo al backend para tener los datos....

            profileUser(reduxUserCredentials.credentials.id)
                .then(
                    resultado => {
                        setUserDataApi(resultado)
                    }
                )
                .catch(error => console.log(error));
        }

    },[reduxUserCredentials]);

    return(
        <>
            {
                userDataApi?.id !== 0

                ? (<div>{userDataApi.name}</div>)

                : (<div>No hay datos de perfil</div>)
            }
        
        </>
    )
}