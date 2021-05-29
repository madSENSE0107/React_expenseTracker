import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(t => t.values);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );
    return (
        <div className=" flex flex-row space-x-4 ">
            <div >
                Income
                <div className="text-green-700">
                    {income}
                </div>

            </div>
            <div>
                Expense
                <div className="text-red-700">
                    {expense}
                </div>
            </div>
        </div>
    )
}
