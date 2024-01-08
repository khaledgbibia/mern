import { useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { getTodos } from "./Redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import AddPage from "./Pages/AddPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const { mytodos } = useSelector((state) => state.todo);
  const { loading } = useSelector((state) => state.todo);

  return (
    <div className="App">
      <AddPage/>
      <br/>
      {loading ? (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <HomePage mytodos={mytodos} />
      )}
    </div>
  );
}

export default App;
