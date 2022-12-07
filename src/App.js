import { Provider } from "react-redux";
import "./App.css";
import SetupRouter from "./router";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SetupRouter />
      </Provider>
    </div>
  );
}

export default App;
