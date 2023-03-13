import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Nav from "./components/Nav/Nav";
import Todo from "./components/Todo/Todo";
import Login from "./components/Auth/Login";
import Protected from "./components/Auth/Protected";
import Signup from "./components/Auth/Signup";
import { useStateContext } from "./context/StateContextProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { isFormOpen } = useStateContext();
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Nav />
        { isFormOpen && <AddTaskForm /> }
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/account"
            element={
              <Protected>
                <Todo />
              </Protected>
            }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
