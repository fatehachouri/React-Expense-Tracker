import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import InExList from "./components/InExList";
import Transactions from "./components/Transactions";

function App() {
  const [balance, setBalance] =useState(0);

  const [expenses, setExpenses]= useState([
    {
      id:1,
      label: 'Rent',
      amount:'300'
    },
    {
      id:2,
      label: 'Phone repair',
      amount:'30'
    },
  ]);
  const [incomes, setIncomes]= useState([
    {
      id:1,
      label: 'Salary',
      amount:'3000'
    },
   
  ]);
  const addIncome=(income)=>{
    setIncomes([income, ...incomes]);
  }
  const addExpense=(expense)=>{
    setExpenses([expense, ...expenses]);
  }
  const removeIncome=(id)=>{
  const updatedIncomes=incomes.filter(income=>income.id!==id);
  setIncomes(updatedIncomes);
  }
  const removeExpense=(id)=>{
  const updatedExpenses=expenses.filter(expense=>expense.id!==id);
  setExpenses(updatedExpenses);
  }
  useEffect(()=>{
    calcBalance()
  });
  const calcBalance=()=>{
    const totalIncArray=incomes.map(income=>income.amount);
    const totalExArray=expenses.map(expense=>expense.amount);
    const totalInc=totalIncArray.reduce((a,b)=>parseInt(a)+parseInt(b),0);
    const totalEx=totalExArray.reduce((a,b)=>parseInt(a)+parseInt(b),0);
    setBalance(parseInt(totalInc)-parseInt(totalEx));
  }

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-body">
          <Balance balance={balance} />
          <Transactions addIncome={addIncome} addExpense={addExpense} />
          <InExList 
          incomes={incomes} 
          expenses={expenses} 
          removeIncome={removeIncome}
          removeExpense={removeExpense}

          />
          </div>
        </div>
        </div>
      </div>
   
   
    </div>
  );
}

export default App;
