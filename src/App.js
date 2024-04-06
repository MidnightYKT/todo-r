import "./App.css";
import GlobalModal from "./components/GlobalModal";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <GlobalModal />
      <TodoList />
    </div>
  );
}

export default App;
