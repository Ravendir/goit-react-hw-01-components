import React from "react";
import Transaction from "../TransactionHistory";
import styles from "../TransactionHistory.module.css";

const TransactionList = ({ items }) => (
  <table className={styles.transactionTable}>
    <thead className={styles.transactionThead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(({ currency, amount, type, id }) => (
      <Transaction key={id} amount={amount} type={type} currency={currency} />
    ))}
  </table>
);

export default TransactionList;
