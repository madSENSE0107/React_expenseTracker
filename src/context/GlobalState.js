import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";



const initialState = {
    transactions: [
      
    ]
  }
export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id //so we knwo which one to delete
    
      });
    }
    
    
    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction //sending entire transaction object
      });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions , 
        deleteTransaction,
        addTransaction,
      }}>
        {children}
        {/* so that value is avaailable to all the children  */}
      </GlobalContext.Provider>);
    }
  