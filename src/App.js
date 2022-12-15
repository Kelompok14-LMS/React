import "./App.css";
import SetupRouter from "./router";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        
         <SetupRouter />
        </StoreProvider>
     
    </div>
  );
}

export default App;
