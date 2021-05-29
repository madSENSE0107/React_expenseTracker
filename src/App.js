import './App.css';
import { Addtransaction } from './components/Addtransaction';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <div className="flex flex-col flex-wrap content-center  m-8 p-8">
          <h1 className="text-4xl">Expense Tracker</h1>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <Addtransaction />
          <div className="text-xs text-gray-400 mt-2">The values will be removed on reload </div>
        </div>
    </GlobalProvider>
    
      
   
  );
}

export default App;
