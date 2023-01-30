import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Transactions({addIncome,addExpense}) {
    const [label, setLabel]=useState('');
    const [amount, setAmount]=useState('');

    const addInc=(income)=>{
        addIncome(income);
        setTimeout(()=>{
        setLabel('');
        setAmount('');
        },500)
    }
    const addExp=(expense)=>{
        addExpense(expense);
        setTimeout(()=>{
        setLabel('');
        setAmount('');
        },500)
    }
  return (
    <div className="row">
    <div className="col-md-6 mx-auto">
        <div className="row g-3 my-3">
            <div className="col-auto">
                <button disabled={!label || !amount} onClick={()=>addExp({id:uuidv4(),label,amount})} className="btn btn-sm btn-danger mb-3">
                    <i className="bi bi-bag-dash-fill"></i>
                </button>
            </div>
            <div className="col-auto">
                <input value={label} onChange={(event)=>setLabel(event.target.value)} type='text' className="form-control mb-2" placeholder="label" />
                <input value={amount} onChange={(event)=>setAmount(event.target.value)} type='number' className="form-control mb-2" placeholder="amount"/>
            </div>
            <div className="col-auto">
            <button disabled={!label || !amount} onClick={()=>addInc({id:uuidv4(),label,amount})} className="btn btn-sm btn-success mb-3">
                    <i className="bi bi-bag-plus-fill"></i>
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
