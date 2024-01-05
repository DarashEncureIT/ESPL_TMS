import "./App.css"
import LoginForm from "./components/LoginForm";
import DashboardPage from "./components/dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";
function App() {
  return (
    <div className="App">
      {/* <LoginForm/>     */}
      <DefaultLayout>
        <DashboardPage/>
        </DefaultLayout>
    </div>
  );
}

export default App;
