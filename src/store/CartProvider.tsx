import { ReactNode, useReducer } from "react";
import { CartContext } from "./cart-context";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }
interface CartItemType {
  id: string;
  name: string;
  price: number;
  amount: number;
}
export interface CartContextData {
  items: CartItemType[];
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
  // clearCart: () => void;
}
interface Props {
  children: ReactNode;
}
interface StateTypes {
  items: CartItemType[];
  totalAmount: number;
}

interface ActionType {
  type: 'ADD' | 'REMOVE' ;
  item?: CartItemType  ;
  id?: string;
}
 
const defaultCartState:StateTypes= {
  items:[],
  totalAmount:0,
}
 
const cartReducer =  (state:StateTypes,action:ActionType) =>{

   if(action.type==='ADD'){ 
     // const updateItem = state.items.concat(action.item!);
    // const updateTotalAmount = state.totalAmount + action.item!.price * action.item!.amount;

    const updateTotalAmount = state.totalAmount + (action.item?.price ?? 0) * (action.item?.amount ?? 0);
 
      const existingCartItemIndex = state.items.findIndex(item=>item.id===action.item?.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
       if(existingCartItem){
 
       const  updateItem = {
          ...existingCartItem,
         amount: existingCartItem.amount +  (action.item?.amount ?? 0) ,
        };
    
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updateItem;
       }else{ 
        console.log('r')
      updatedItems = action.item ? [...state.items,action.item] : state.items; 
       }

    return {
      items:updatedItems,
      totalAmount:updateTotalAmount,
    };
  }
    if( action.type ==='REMOVE'){ 
      const existingCartItemIndex = state.items.findIndex(item=>item.id===action .id);
      const existingItem = state.items[existingCartItemIndex];
      const updateTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if(existingItem.amount===1){
 
       updatedItems = state.items.filter(item=>item.id!== action.id);
      
      }else{
      const updatedItem = {...existingItem,amount:existingItem.amount-1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex]= updatedItem
      }

    return {
      items:updatedItems,
      totalAmount:updateTotalAmount,
    }
  }
  return defaultCartState;
}

const CartProvider = ({ children }: Props) => {
  const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);
  const addItemToCartHandler = (item:CartItemType ) => {
    dispatchCartAction({type:'ADD',item:item,})
  };

  const removeItemFromCartHandler = (id: string) => {
     dispatchCartAction({type:'REMOVE', id:id})
  };

  const cartContextData: CartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,

  };

  return <CartContext.Provider value={cartContextData}>{children}</CartContext.Provider>;
};

export default CartProvider;
///
/*
  
interface CartItemType {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface CartContextData {
  items: CartItemType[];
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
}

interface Props {
  children: ReactNode;
}

interface StateTypes {
  items: CartItemType[];
  totalAmount: number;
}

interface ActionType {
  type: 'ADD' | 'REMOVE' | 'CLEAR';
  item?: CartItemType;
  id?: string;
}

const defaultCartState: StateTypes = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: StateTypes, action: ActionType) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = ({ children }: Props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: CartItemType) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContextData: CartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContextData}>{children}</CartContext.Provider>;
};

export default CartProvider
*/