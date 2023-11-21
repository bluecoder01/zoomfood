import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import AppContext from "./contexts";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter basename="/zoom">
          <Layout />
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
