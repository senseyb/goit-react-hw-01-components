import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function upperFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transTable}>
      <table className="transaction-history">
        <thead className={styles.table}>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {items.map(item => (
            <tr key={item.id}>
              <td className={styles.tableData}>{upperFirstLetter(item.type)}</td>
              <td className={styles.tableData}>{item.amount}</td>
              <td className={styles.tableData}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string,
};
TransactionHistory.defaultProps = {
  type: 'Type',
  currency: 'Currency',
};

export default TransactionHistory;