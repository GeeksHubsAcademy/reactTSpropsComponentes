
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { characterData } from "../detailSlice";


export const Detail = () => {

    const rdxCharacterData = useSelector(characterData);

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
                    <>{rdxCharacterData.character.name}</>
                )

                : (<>cargando...</>)
            }
        </>
    )
}