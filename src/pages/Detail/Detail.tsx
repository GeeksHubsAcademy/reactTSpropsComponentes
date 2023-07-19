
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { characterData } from "../detailSlice";
import { userData } from "../userSlice";
import { Button } from "react-bootstrap";
import { add } from "../cartSlice";


export const Detail = () => {

    const rdxCharacterData = useSelector(characterData);
    const rdxUserData = useSelector(userData);

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     console.log(rdxCharacterData.character.name);
    // },[]);

    return(
        <>
            {
                rdxCharacterData.character.id !== ""

                ? (
                    //Aquí en este caso podríamos buscar una card de React bootstrap 
                    //pasarle los datos mediante props y que se encargue de renderizar
                    //un perfil del character escogido....
                    <>{rdxCharacterData.character.name}
                    
                       {rdxUserData.credentials.token &&

                            <Button onClick={()=>dispatch(add(rdxCharacterData.character))}>Add to cart</Button>
                       
                       }
                    </>

                )

                : (<>cargando...</>)
            }
        </>
    )
}