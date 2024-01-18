import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import store from "./Store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
