import { FieldValues, useForm } from "react-hook-form";

function App() {
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
            {...register("category")}
            name="selectedCategory"
            className="form-select"
            aria-label="Default select example"
            id="category"
          >
            <option selected></option>
            <option value="Grocery">Grocery</option>
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
