import React from "react";
import { useParams } from "react-router-dom";
import AddNewOperation from "./addNewOperation";
import EditOperation from "./editOperation";

const Operation = () => {
  const { operationId } = useParams();
  return (
      <>
        {operationId ? <EditOperation operationId={operationId} /> : <AddNewOperation/>}
      </>
  );
};

export default Operation;

