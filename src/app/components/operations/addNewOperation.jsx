import React from "react";
import {useOperations} from "../../hooks/useOperations";
import OperationForm from "./operationForm";

const AddNewOperation = () => {
  const {createOperation} = useOperations();
  const data = {amount: "", type: "", category: "", account: "", comment: ""};
  const handleSubmit = async (data) => {
      try {
          await createOperation(data);
      } catch (error) {
          console.log(error);
      }
      // const isValid = validate();
      // if (!isValid) return;
  };
  if (data) {
      return <OperationForm onSubmit={handleSubmit} operationData={data} buttonName="Create" />
  }
  return <div>Loading...</div>
};

export default AddNewOperation;