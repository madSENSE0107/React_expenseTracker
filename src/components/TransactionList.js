import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export const TransactionList = () => { 
    const {transactions} =useContext(GlobalContext) //destructured
    // console.log(transactions[1].values)
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <div className="mt-8 border-gray-200  ">
            
            <h1 className="text-2xl">History</h1>
            
             <ul >
                {transactions.map(t=>(
                    <li key={t.id} className="flex flex-row justify-between border-b-2 border-gray-100 space-y-4 ">
                        <div className="flex flex-col "> <div>{t.text}</div><div className="text-2xl">{t.values}</div> </div>
                        <button onClick={()=>deleteTransaction(t.id)} className="px-4 hover:bg-red-400 bg-red-300">X</button> 
                    </li>
                    // key is used so that react can map through list 
                ))}
             </ul>
            
          

        </div>
    )
}
