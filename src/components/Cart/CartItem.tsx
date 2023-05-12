
import classes from './CartItem.module.css';
import { CartItemType } from './Cart';
interface Props {
  id: string;
  name: string;
  amount: number;
  price: number;
  onRemove: (id: string) => void;
  onAdd: (item: CartItemType) => void;
}
const CartItem  = (props: Props) => {
     
    return (
        <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>props.onRemove(props.id)}>−</button>
        <button onClick={()=>props.onAdd(props)}>+</button>
      </div>
    </li>
    );
};

export default CartItem;