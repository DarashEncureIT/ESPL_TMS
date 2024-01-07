import "./App.css"
import LoginForm from "./components/LoginForm";
import DashboardPage from "./components/dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";
import { TicketForm } from "./components/TicketForm";
import { TicketListing } from "./components/TicketListing";
function App() {
  return (
    <div className="App">
          
      <DefaultLayout>
      {/* <LoginForm/> */}
        {/* <DashboardPage/> */}
        {/* <TicketForm/> */}
        <TicketListing/>
        </DefaultLayout>
    </div>
  );
}

export default App;
