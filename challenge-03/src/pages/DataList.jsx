import { useState, useEffect } from "react";
import FormTodoSearch from "../components/FormTodoSearch";
import Judul from "../components/Judul";
import FormTodoList from "../components/FormTodoList";
import { Link } from "react-router-dom";

export default function DataList({
  dataJson,
  setDataJson,
  deleteTask,
  updateListArray,
  doneTask,
}) {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleDelete = (index) => {
    deleteTask(index);
  };

  const handleChecked = (e, item, index) => {
    const data = e.target.checked;
    setChecked(data);
    if (data === true) {
      if (item.complete == true) {
        handleCoretTrue(item, index);
        window.location.reload();
      } else if (item.complete == false) {
        handleCoretFalse(item, index);
        window.location.reload();
      }
    }
  };
  const handleCoretTrue = (item, index) => {
    if (item) {
      let taskObj = {};
      taskObj["task"] = item.task;
      taskObj["complete"] = false;
      setComplete(false);
      updateTask(taskObj, index);
      //   console.log(item);
    }
  };
  const handleCoretFalse = (item, index) => {
    if (item) {
      let taskObj = {};
      taskObj["task"] = item.task;
      taskObj["complete"] = true;
      setComplete(true);
      updateTask(taskObj, index);
      //   console.log(item);
    }
  };
  const updateTask = (obj, index) => {
    updateListArray(obj, index);
    console.log(obj);
  };

  //   ======

  const deleteDoneTask = (dataJson) => {
    {
      dataJson.filter((item, index) => {
        if (item.complete == true) {
          handleDeleteDoneTask(index);
          // console.log(index);
        }
      });
    }
  };
  const handleDeleteDoneTask = (index) => {
    console.log(index);
    doneTask(index);
  };

  //   =====
  const deleteAllTask = (dataJson) => {
    {
      dataJson.filter((item, index) => {
        if (item) {
          handleDeleteDoneTask(index);
        }
      });
    }
  };

  return (
    <div>
      <FormTodoSearch setSearch={setSearch} />
      <Judul>TodoList</Judul>
      <FormTodoList dataJson={dataJson} setdataJson={setDataJson} />

      {dataJson
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.task.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item, index) => (
          <div className="dataJson" key={item.task}>
            <div className="container w-75 justify-content-between">
              <div className="row border rounded p-1 my-2 d-flex justify-content-between">
                <div className="col-sm-7 m-1">
                  {item.complete == true ? (
                    <p id="coret">{item.task}</p>
                  ) : (
                    <p>{item.task}</p>
                  )}
                </div>
                <div className="col-sm-3">
                  <input
                    type="checkbox"
                    onChange={(e) => handleChecked(e, item, index)}
                  />
                  <Link to={"/FormEditTask/" + index}>
                    <button className="m-1">edit</button>
                  </Link>

                  <button className="m-1" onClick={() => handleDelete(index)}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="container ustify-content-center">
        <div className="row my-5 justify-content-center">
          <div className="col-sm-5 m-3">
            <button
              className="col-12 btn btn-danger text-white-50 "
              onClick={() => deleteDoneTask(dataJson)}
            >
              Delete Done Task
            </button>
          </div>
          <div className="col-sm-5 m-3">
            <button
              className="col-12 btn btn-danger text-white-50 "
              onClick={() => deleteAllTask(dataJson)}
            >
              Delete All Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
