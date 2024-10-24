import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { GetReposRequest } from "./store/repos/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetReposRequest());
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
