import   { useContext ,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import { CartContextData } from '../../store/CartProvider';
import { CartContext } from '../../store/cart-context';
 
interface HeaderCartButtonProps {
    onClick: () => void;
  }
  
const HeaderCartButton = (props:HeaderCartButtonProps) => {
    const [btnIsHiLighted,setBtnIsHightLighted]= useState(false);
    const cartCtx  = useContext<CartContextData>(CartContext);
  
    const {items} = cartCtx;
    const numOfCartItems = items.reduce((acc: number ,cur: { amount: number; } )=>{ return acc+ cur.amount },0);
    const btnClasses = `${classes.button} ${btnIsHiLighted? classes.bump: ''}`;
  useEffect(()=>{
    if(items.length ===0){
        return;
    }
       setBtnIsHightLighted(true);
     const timer =   setTimeout(()=>{
        setBtnIsHightLighted(false);
       },300)
      return ()=>{
        clearTimeout(timer)
      } 
  },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/>
            </span><span>Your Cart</span>
            <span className={classes.badge }>{numOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;