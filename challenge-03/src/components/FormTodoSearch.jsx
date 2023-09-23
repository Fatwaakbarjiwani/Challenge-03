import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function FormTodoSearch({ setSearch }) {
  return (
    <form>
      <div className="container w-75">
        <div className="row border rounded p-4 justify-content-around">
          <input
            type="text"
            className="col-sm-7 rounded border border-info p-1 m-2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="col-4 m-2"></div>
          <button
            type="button"
            className="col-sm-7 m-2 text-bg-info text-light"
          >
            Search
          </button>

          <div className="col-sm-4 m-2">
            <Link to="/FormAddNewTask">
              <button type="button" className="col-12 text-bg-info text-light">
                AddNewTask
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
