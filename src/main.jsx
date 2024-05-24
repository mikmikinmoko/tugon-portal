import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import PageLoader from "./Components/UnAuthenticated/UI/PageLoader.jsx";
import PersistGateLoading from "./Components/UnAuthenticated/UI/PersistGateLoading.jsx";
import { injectStore } from "./helpers/injectedStore.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
injectStore(store);

// const App = lazy(() => import("./App"));
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={<PersistGateLoading />} persistor={persistor}>
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <PageLoader />
            </div>
          }
        >
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
