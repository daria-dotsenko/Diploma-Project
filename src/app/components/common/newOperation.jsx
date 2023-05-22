import React, { useState } from "react";
// import {useHistory} from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import {validator} from "../../utils/validator";
// import {validatorConfig} from "../../utils/validatorConfig";
import TextField from "./form/textField";
import SelectField from "./form/selectField";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

const NewOperation = () => {
  const { type } = useParams();
  console.log("type", type);
  // const history = useHistory();
  const types = type ? [] : [{label: "income", value: "p2G4iR"}, {label: "costs", value: "x8B6jL"}]; // timelines
  const categories = [{label: "food", value: "j8D3bT"}, {label: "household", value: "q2K9rS"}] // timelines
  const accounts = [{label: "Card", value: "w5Y2sN"}, {label: "Cash", value: "p9R6vM"}] // timelines
  const { currentUser } = useAuth();
  const [data, setData] = useState({ amount: "", type: "", category: "", account: "", comment: "" });
  // const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  // useEffect(() => {
  //   validate();
  // }, [data]);
  // const validate = () => {
  //   const errors = validator(data, validatorConfig);
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };
  // const isValid = Object.keys(errors).length === 0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const operation = {
      ...data,
      _id: nanoid(),
      created_at: Date.now(),
      userId: currentUser._id
    };
    console.log("done", operation);
    // const isValid = validate();
    // if (!isValid) return;
    // try {
    //   await editEmail(data);
    //   history.push("/");
    // } catch (error) {
    //   setErrors(error);
    // }
  };
  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <form onSubmit={handleSubmit}>
              <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={data.amount}
                  onChange={handleChange}
                  // error={errors.}
              />
              <SelectField
                  label="Type"
                  defaultOption={type ? type : "Choose..."}
                  options={types}
                  name="type"
                  onChange={handleChange}
                  value={data.type}
                  // error={errors.}
              />
              <SelectField
                  label="Category"
                  defaultOption="Choose..."
                  options={categories}
                  name="category"
                  onChange={handleChange}
                  value={data.category}
                  // error={errors.}
              />
              <SelectField
                  label="Account"
                  defaultOption="Choose..."
                  options={accounts}
                  name="account"
                  onChange={handleChange}
                  value={data.account}
                  // error={errors.}
              />
              <TextField
                  label="Comment"
                  name="comment"
                  type="textarea"
                  value={data.comment}
                  onChange={handleChange}
                  // error={errors.}
              />
              <button
                  className="btn btn-primary w-100 mx-auto"
                  type="submit"
                  // disabled={!isValid}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default NewOperation;