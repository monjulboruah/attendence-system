import { DataProvider } from "./GlobalState";
import AllPages from "./components/AllPages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <DataProvider>
        <Router>
          <AllPages />
        </Router>
      </DataProvider>
      
    </div>
  );
}

export default App;
