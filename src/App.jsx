import "./App.css"
import LoginForm from "./components/LoginForm";
import DashboardPage from "./components/dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";
import { TicketForm } from "./components/TicketForm";
import { TicketListing } from "./components/TicketListing";
import { BrowserRouter as Router, Route,Link,Routes } from "react-router-dom";
import { Ticket } from "./components/ticket/TicketPage";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
        <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute><DashboardPage/></PrivateRoute>}
          />
          <Route
            path="/ticketform"
            element={<PrivateRoute><TicketForm/></PrivateRoute>}
          />
          <Route
            path="/ticketlist"
            element={<PrivateRoute><TicketListing/></PrivateRoute>}
          />
          <Route
            path="/ticket/:tid"
            element={<PrivateRoute><Ticket/></PrivateRoute>}
          />
        
        </Routes>
        </Router>
    </div>

  );
}

export default App;
