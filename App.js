import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import store, { persistor } from "./src/reducers/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
}
