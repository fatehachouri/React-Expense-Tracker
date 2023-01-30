
export default function InExList({incomes,expenses,removeIncome,removeExpense}) {
  return (
    <div className="row my-3">
     <div className="col-md-10 mx-auto">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-5">
        <h4 className="mb-3"> Expenses</h4>
        <ul className="list-group">
        {
            expenses.map(exp=> <li key={exp.id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">
                    {exp.label} ${exp.amount}
                </h6>
                <span onClick={()=>removeExpense(exp.id)} className="text-danger">
                    <i className="bi bi-bag-x"></i>
                </span>
            </div>
        </li>)
        }
        </ul>
        </div>
        <div className="col-md-5">
        <h4 className="mb-3"> Incomes</h4>
        <ul className="list-group">
        {
            incomes.map(inc=><li key={inc.id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">
                    {inc.label} ${inc.amount}
                </h6>
                <span onClick={()=>removeIncome(inc.id)} className="text-danger">
                    <i className="bi bi-bag-x"></i>
                </span>
            </div>
        </li>)
        }
        </ul>
        </div>
      </div>
     </div>
    </div>
  )
}
