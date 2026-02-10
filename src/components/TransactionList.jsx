import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTransactions = transactions.filter(transaction =>
        transaction.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h3>History</h3>
            <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <ul className="list">
                {filteredTransactions.map(transaction => (
                    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
                        {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
                        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
