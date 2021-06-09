import React from "react";
import styles from "./TransactionHistory.module.css";

const Transactions = ({ currency, amount, type, id }) => {
  return (
    <tbody>
      <tr key={id} className={styles.transactionHystoryTable}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

export default Transactions;
