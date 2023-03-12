import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Nav from "./components/Nav/Nav";
import Todo from "./components/Todo/Todo";
import Login from "./components/UsersLog.js/Login";
import Protected from "./components/UsersLog.js/Protected";
import Signup from "./components/UsersLog.js/Signup";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/account"
            element={
              <Protected>
                <Todo />
              </Protected>
            }/>
        </Routes>
        {/* <Todo /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
