import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { store } from "redux/store";
import RouterConfig from "routes/RouterConfig";

import "./styles/tailwind.css";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AnimatePresence>
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </AnimatePresence>
  );
}

export default App;
