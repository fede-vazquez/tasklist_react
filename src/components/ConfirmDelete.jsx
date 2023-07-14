import React from "react";
import { deleteItemById } from "../utils/deleteItemById";
import { useNavigate } from "react-router-dom";

const AlertComponent = ({
  idToRemove,
  message,
  array,
  setShowAlert,
  urlToRedirect,
}) => {
  const navigate = useNavigate();

  function deleteItem(id, itemList) {
    deleteItemById(id, itemList, "userTasks");
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
            onClick={() => deleteItem(idToRemove, array)}
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
