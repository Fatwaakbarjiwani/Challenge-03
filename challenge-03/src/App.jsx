import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HalamanUtama from "./pages/HalamanUtama";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAddNewTask from "./pages/FormAddNewTask";
import { useEffect, useState } from "react";

function App() {
  const [dataJson, setDataJson] = useState([]);
  const deleteTask = (index) => {
    let tempJson = dataJson;
    tempJson.splice(index, 1);
    localStorage.setItem("dataJson", JSON.stringify(tempJson));
    setDataJson(tempJson);
    window.location.reload();
  };
  const deleteDoneTask = (index) => {
    let tempJson = dataJson;
    tempJson.splice(index);
    localStorage.setItem("dataJson", JSON.stringify(tempJson));
    setDataJson(tempJson);
    window.location.reload();
  };
  const handleSimpan = (taskObj) => {
    let tempJson = dataJson;
    tempJson.push(taskObj);
    localStorage.setItem("dataJson", JSON.stringify(tempJson));
    setDataJson(tempJson);
  };

  const updateListArray = (obj, index) => {
    let tempJson = dataJson;
    tempJson[index] = obj;
    localStorage.setItem("dataJson", JSON.stringify(tempJson));
    setDataJson(tempJson);
  };
  useEffect(() => {
    let arr = localStorage.getItem("dataJson");
    if (arr) {
      let obj = JSON.parse(arr);
      setDataJson(obj);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HalamanUtama
              dataJson={dataJson}
              setDataJson={setDataJson}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              doneTask={deleteDoneTask}
            />
          }
        />
        <Route
          path="/FormAddNewTask"
          element={
            <FormAddNewTask
              handleSimpan={handleSimpan}
              dataJson={dataJson}
              updateListArray={updateListArray}
            />
          }
        />
        <Route
          path="/FormEditTask/:index"
          element={
            <FormAddNewTask dataJson={dataJson} updateListArray={updateListArray} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ============================================= README =====================================================
// BUKA 2 TERMINAL UNTUK npm run dev DAN npm run server UNTUK MENJALANKAN CHALLENGE - 03
