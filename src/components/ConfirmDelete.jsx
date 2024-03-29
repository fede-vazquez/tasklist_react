import React from "react";
import { useNavigate } from "react-router-dom";
import useTasksContext from "../hooks/useTasksContext";
import useCompleteTasksContext from "../hooks/useCompleteTasksContext";

const AlertComponent = ({
  idToRemove,
  message,
  setShowAlert,
  urlToRedirect,
}) => {
  const navigate = useNavigate();

  const { deleteTask } = useTasksContext();

  const { multipleRemoveCompleteTask } = useCompleteTasksContext();

  function deleteItem(idToDelete) {
    deleteTask(idToDelete);
    multipleRemoveCompleteTask(idToDelete);
    setShowAlert(false);
    navigate(urlToRedirect);
  }

  function hideAlert() {
    setShowAlert(false);
  }

  return (
    <div className="w-100 h-100 position-absolute start-0 top-0">
      <div
        className="w-100 h-100 bg-black bg-opacity-25"
        onClick={() => hideAlert()}
      ></div>

      <div className="alert-custom bg-2 rounded p-3 shadow text-center">
        <p className="my-3">{message}</p>
        <div className="row justify-content-evenly">
          <button
            className="btn btn-1 col-5"
            onClick={() => deleteItem(idToRemove)}
          >
            Borrar
          </button>
          <button
            className="btn btn-1 col-5"
            onClick={() => {
              hideAlert();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
