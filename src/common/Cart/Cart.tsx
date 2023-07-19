
import { useEffect } from "react";

//Conexion a Redux......
import { useSelector } from "react-redux";
import { cartData } from "../../pages/cartSlice";

export const Cart = () => {

    //Instancio RDX en modo lectura

    let rdxCartData = useSelector(cartData);

    useEffect(()=>{

        console.log(rdxCartData);
    },[rdxCartData]);

    return (
        <>
            <i className="bi bi-cart" style={{ fontSize: 50 }}></i>
            {rdxCartData.items.length}
        </>
    )
}