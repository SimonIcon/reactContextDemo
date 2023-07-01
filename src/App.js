
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import AuthPage from "./Pages/AuthPage";
function App() {
  const { dashboard } = useContext(AuthenticationContext)
  return (
    <div className="w-full h-[100vh]">

      {
        dashboard === false ? <AuthPage /> :
          <Dashboard />
      }


    </div>
  );
}

export default App;
