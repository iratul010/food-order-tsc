 import  { createContext } from "react";
//  type CartContextType = {
//     items: { id: string; name: string; price: number; quantity: number }[];
//     totalAmount: number;
//     addItem: (item: { id: string; name: string; price: number; quantity: number }) => void;
//     removeItem: (id: string) => void;
//   };

//   const CartContext = createContext<CartContextType>({
//     items: [],
//     totalAmount: 0,
//     addItem: (item) => {},
//     removeItem: (id) => {},
//   });
//  export default CartContext;
 
import { CartContextData } from "./CartProvider";

 
  // interface ContextType {
  //   items: {
  //     id: string;
  //     name: string;
  //     price: number;
  //     quantity: number;
  //   }[];
  //   addItem: (item: { id: string; name: string; price: number; quantity: number }) => void;
  //   removeItem: (id: string) => void;
  // }
 

// const CartContext = React.createContext<ContextType> ({
//   items: [],
//   addItem: () => {},
//   removeItem: () => {},
// });
export const CartContext =  createContext <CartContextData > ( {
       items: [],
      totalAmount: 0,
      addItem: (item) => {
        //
      
      },
      removeItem: (id) => {
        //
      },
  
});

 
