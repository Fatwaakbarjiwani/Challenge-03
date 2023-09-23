import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Judul from "../components/Judul";

export default function FormAddNewTask({
  handleSimpan,
  dataJson,
  updateListArray,
}) {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [complete, setComplete] = useState(false);
  const { index } = useParams();

  const save = () => {
    let taskObj = {};
    taskObj["task"] = task;
    taskObj["complete"] = complete;

    if (index) {
      updateTask(taskObj, index);
    } else {
      handleSimpan(taskObj);
      navigate("/", { replace: true });
    }
  };

  const updateTask = (obj, index) => {
    updateListArray(obj, index);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (index) {
      setTask(dataJson[index].task);
      setComplete(complete);
    }
  }, [index]);

  return (
    <>
      <Judul>AddNewTask</Judul>
      <div className="d-flex justify-content-center">
        <form className="border mx-5 rounded w-75 p-5">
          <div className="d-flex justify-content-center">
            <input
              className="col-sm-10 rounded border border-info p-1 m-2"
              name="taskName"
              type="text"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="col-10 btn text-bg-info text-light m-2"
              onClick={save}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
