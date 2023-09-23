import { useEffect, useState } from "react";
import Judul from "../components/Judul";

export default function FormEditTask({ taskObj }) {
  const [task, setTask] = useState("");
  useEffect(() => {
    setTask(taskObj.task);
  }, []);

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
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="col-10 btn text-bg-info text-light m-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
