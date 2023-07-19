
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { cartData, remove } from "../cartSlice";
import { Button } from 'react-bootstrap';


export const Cart = () => {

    const rdxCartData = useSelector(cartData);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("soy los datos del carrito venidos directamente de rdx", rdxCartData);
    },[rdxCartData]);

    return (
        <>{
            rdxCartData.items.length > 0 

            ? (<div>{rdxCartData.items.map(
                producto => {
                    return (
                        <div key={producto.id}>{producto.name}</div>
                    )
                }
            )}
            
            <Button onClick={()=>dispatch(remove([]))}>Eliminar carrito</Button>
            </div>)

            : (<div>No tengo items en el carrito</div>)
        }</>
    )
}