import React from "react";

interface ExpenseObj {
  id: number;
  expense: string;
  amount: number;
  category: string;
}

interface Props {
  expense: ExpenseObj[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
  return (
    <div>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.id}</td>
              <td>{exp.expense}</td>
              <td>{exp.amount} Rs.</td>
              <td>{exp.category} </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(exp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <b>Total</b>
            </td>
            <td>{expense.reduce((sum, exp) => exp.amount + sum, 0)} Rs.</td>

            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
