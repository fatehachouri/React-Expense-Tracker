import  { useEffect, useState } from 'react'

export default function Balance({balance}) {
    const [currentBalance, setCurrentBalance] =useState(0);

    useEffect(()=>{
     setCurrentBalance(balance);
    },[balance]);

  return (
    <div className={`bg-white border ${currentBalance>=0 ? 'border-success' : 'border-danger'} text-center rounded` }>
    <p className="lead mt-3 d-flex justify-content-center">
      <span className="fw-bold me-2">
        Balance:
      </span>
      <span className={`badge ${ currentBalance>=0 ? 'bg-success' : 'bg-danger'} `}>
        ${currentBalance}
      </span>
    </p>
    </div>
  )
}
