
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Addtransaction = () => {
    const [text, settext] = useState("")
    const [values, setvalues] = useState(0)
    const { addTransaction } = useContext(GlobalContext)
    const handleSubmit = e =>{
        e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

        const newTransaction = {
        id: Math.floor(Math.random() * 100000000), // to generate new id (very bad for real world )
        text,
        values: +values // to add it as a number not as a string
    }

        addTransaction(newTransaction);
    }
    return (
        <div className="mt-8 flex flex-col">
            <div className="text-2xl">Transactions</div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col" >
                    <label>Text</label>
                    <input required className="border-2 border-gray-200" type="text" value={text} onChange={(e)=>{settext(e.target.value)}} placeholder="Enter text..." />
                </div>
                <div className="mt-2 flex flex-col">
                    <label>Amount</label>
                    <div className="text-xs text-gray-400"> (negative - expense, positive - income)</div>
                    <input required className="border-2 border-gray-200" value={values} onChange={(e)=>{setvalues(e.target.value)}} type="text" placeholder="Enter Amount..." />
                </div>
                <button  className="bg-green-700 hover:bg-green-500 text-gray-200 rounded-sm mt-3">Add Transaction</button>
                
            </form> 
        </div>
    )
}
