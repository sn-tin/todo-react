import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Nav from "./components/Nav/Nav";
import Todo from "./components/Todo/Todo";
import { useStateContext } from "./context/StateContextProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { isFormOpen } = useStateContext();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      { isFormOpen && <AddTaskForm /> }
      <Todo />
    </div>
  );
}

export default App;
