 
import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem';
 
 
 export interface CartItemType{
     id:string,
     name:string,
     amount:number,
     price:number,
}
interface PropsClose {
    onClose: () => void;
  }
  
const Cart  = ( props:PropsClose) => {
  const carItemRemoveHandler = (id:string)=>{
   cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item:CartItemType)=>{
     cartCtx.addItem( {...item,amount:1});
  };
   const cartCtx = useContext(CartContext);
   const hasItems = cartCtx.items.length>0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) =>
     <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} id={item.id} onRemove={carItemRemoveHandler.bind(null,item?.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
      )}</ul>
    return (
        <Modal onClose={props.onClose}>
           {cartItems}
           <div className={classes.total}> 
           <span>Total Amount</span><span>
           {totalAmount}
           </span>
           </div>
           <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
          { hasItems &&   <button className={classes.button}>Order</button>}
           </div>

        </Modal>
    );
};

export default Cart;