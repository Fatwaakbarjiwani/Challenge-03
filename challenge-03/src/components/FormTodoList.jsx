import "bootstrap/dist/css/bootstrap.min.css";

export default function FormTodoList({ dataJson, setdataJson, onPanggil }) {
  const handleDone = () => {
    for (let i = 0; i < dataJson.length; i++) {
      const element = dataJson[i];
      if (element.complete === true) {
        const filter = dataJson.filter((filter) => filter.complete === true);
        setdataJson(filter);
      }
    }
  };
  const handleTodo = () => {
    for (let i = 0; i < dataJson.length; i++) {
      const element = dataJson[i];
      if (element.complete === false) {
        const filter = dataJson.filter((filter) => filter.complete === false);
        setdataJson(filter);
      }
    }
  };
  const handleAll = () => {
    window.location.reload();
  };
  return (
    <div className="container w-75 justify-content-center">
      <div className="row justify-content-between">
        <button
          id="liveToastBtn"
          type="button"
          className="col-sm-3 m-1 text-bg-info text-light"
          onClick={handleAll}
        >
          All
        </button>

        <button
          type="button"
          className="col-sm-3 m-1 text-bg-info text-light"
          onClick={handleDone}
        >
          Done
        </button>
        <button
          type="button"
          className="col-sm-3 m-1 text-bg-info text-light"
          onClick={handleTodo}
        >
          Todo
        </button>
      </div>
    </div>
  );
}
