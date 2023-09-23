import { useEffect, useState } from "react";
import Judul from "../components/Judul";
import DataList from "./DataList";

export default function HalamanUtama({
  dataJson,
  setDataJson,
  deleteTask,
  updateListArray,
  doneTask
}) {
  return (
    <>
      <Judul>TodoSearch</Judul>
      <DataList
        dataJson={dataJson}
        setDataJson={setDataJson}
        deleteTask={deleteTask}
        updateListArray={updateListArray}
        doneTask={doneTask}
      />
    </>
  );
}
