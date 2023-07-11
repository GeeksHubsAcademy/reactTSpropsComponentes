
import { useEffect } from 'react';

import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from 'react-router-dom';

export const Profile = () => {

    //Conecto a REDUX en modo lectura
    const reduxUserCredentials = useSelector(userData);

    const navigate = useNavigate();

    useEffect(()=>{

        if(!reduxUserCredentials.credentials?.token){
            navigate("/");
        };

    },[reduxUserCredentials]);

    return(
        <>soy el perfil!</>
    )
}