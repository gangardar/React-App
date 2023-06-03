import { FieldValues, useForm } from "react-hook-form";
import { INVALID, z } from "zod";

function App() {
  const schema = z.object({
    description: z.string().min(5, { message: "State the clear description." }),
    amount: z.number({ invalid_type_error: "Amount Field is Required" }),
    category: z.string({ invalid_type_error: "Select one category" }),
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-lable">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-lable">
          Category
          <select
            name="selectedCategory"
            className="form-select"
            aria-label="Default select example"
            id="category"
          >
            <option selected></option>
            <option {...register("category")} value="Grocery">
              Grocery
            </option>
            <option value="Grocery">Entertainment</option>
            <option value="Grocery">Accessories</option>
          </select>
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default App;
