import "./App.css";
import List from "./components/List"
const App = () => {

const todos =[{ todo: "wake up", id: 1 },{ todo: "breakfast", id: 2 }, { todo: "study", id: 3 }]
  return (
    <div className="App">
      <h1>Hello From App</h1>
<List collection={todos} />
    </div>
  );
};

export default App;
