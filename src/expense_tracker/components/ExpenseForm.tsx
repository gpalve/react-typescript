import React from "react";
import { categories } from "../../App";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  expense: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div>
      <div className="mb-3">
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label htmlFor="expense" className="form-label">
              Expense
            </label>
            <input
              {...register("expense", { required: true, minLength: 3 })}
              id="expense"
              className="form-control"
              type="text"
            />
            {errors.expense?.type === "required" && (
              <p className="text-danger">Name is Required</p>
            )}
            {errors.expense?.type === "minLength" && (
              <p className="text-danger">Minimum 3 chars</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount", { required: true, valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
            />
            {errors.amount?.type === "required" && (
              <p className="text-danger">Amount is Required</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label"></label>
            <select
              {...register("category", { required: true })}
              id="category"
              className="form-select"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category?.type === "required" && (
              <p className="text-danger">Category is Required</p>
            )}
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Add Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
