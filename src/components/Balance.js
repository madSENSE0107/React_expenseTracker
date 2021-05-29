
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
    const {transactions} =useContext(GlobalContext) 
    const amounts = transactions.map(t => t.values);//mapping through transactions ;now amount is an array
    function sum(total,num){
        return total + num
    }
    const total = amounts.reduce(sum, 0);
    //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // The return value of the function is stored in an accumulator (result/total).
    return (
        <div className="mt-8 text-2xl">
            Balance
            <div className="text-green-700">{total}</div>
        </div>
    )
}
