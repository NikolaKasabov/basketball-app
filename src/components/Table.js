import { nanoid } from 'nanoid';
import './Table.css';

function Table({ columns, data, showPlacement, className }) {
  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>
          {showPlacement && <th>Placement</th>}
          {columns.map(col => <th key={nanoid()}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return <tr key={nanoid()}>
            {showPlacement && <td>{index + 1}.</td>}
            {row.map(cell => <td key={nanoid()}>{cell}</td>)}
          </tr>;
        })}
      </tbody>
    </table>
  );
}

export default Table;
