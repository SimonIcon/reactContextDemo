import { useState } from "react";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  const [userName, setUserName] = useState('')
  const [dashboard, showDashboard] = useState(false)
  return (
    <div className="w-full h-[100vh]">
      <AuthenticationContext.Provider value={{ userName, setUserName, showDashboard }}>
        {
          dashboard === false ? <Login /> :
            <Dashboard />
        }
      </AuthenticationContext.Provider>

    </div>
  );
}

export default App;
