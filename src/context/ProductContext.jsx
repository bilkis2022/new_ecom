import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";


const cartstate = {
   showcart: false,
   cartItems: []
};

const reducer = (state = cartstate, action) =>{
    const { type, payload} = action;

    switch (type) {
        case 'add_to_cart':
           return {
            ...state, cartItems: [...state.cartItems, payload] 
           }
            
        case 'remove_item':
            return {
                ...state, cartItems: state.cartItems.filter((itm)=> itm.id !== payload)
            }   
    
        default:
         return   state;
    }
}

const CartContext = createContext();

const CartProvider = ({ children })=>{
    const [statee, dispatch] = useReducer(reducer, cartstate);
    

    function increase_product (iitem){
        
        dispatch({type: 'add_to_cart', payload: iitem})
        console.log('add');
    }

    function remove_cartitem (id) {

         dispatch({ type: 'remove_item', payload: id})
         console.log('remove');
    }

    return (
        <CartContext.Provider
        value={{
        dispatch,
        statee,
        increase_product,
        remove_cartitem,
        }
        
        }
        >
            {children}
        </CartContext.Provider>
    );
};

const UsecartContext = () => useContext(CartContext)

export{ UsecartContext, CartProvider} ;