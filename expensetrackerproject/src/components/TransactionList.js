import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  
  const {transactions} = useContext(GlobalContext);

  return (
    <>
       <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => {
          return (<Transaction key={item.id} {...item}/>)
        })} 
      </ul>
    </>
  )
}

export default TransactionList
