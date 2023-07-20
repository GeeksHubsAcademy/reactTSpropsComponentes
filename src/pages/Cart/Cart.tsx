
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { cartData, remove } from "../cartSlice";
import { Button } from 'react-bootstrap';
import { newOrder } from '../../services/apiCalls';
import { userData } from '../userSlice';


export const Cart = () => {

    const rdxCartData = useSelector(cartData);
    const rdxUserData = useSelector(userData);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("soy los datos del carrito venidos directamente de rdx", rdxCartData);
    },[rdxCartData]);

    const placeOrder = () => {
        //rdxCartData.id = product_id
        //rdxUserData.credentials.id = user_id
        console.log(rdxCartData);

        newOrder(rdxCartData.items[0].id, rdxUserData.credentials.id)
            .then(
                result => {
                    console.log(result);
                }
            )
            .catch(error => console.log(error));
    }

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
            
            <Button onClick={()=>placeOrder()}>Finalizar pedido</Button>
            </div>)

            : (<div>No tengo items en el carrito</div>)
        }</>
    )
}