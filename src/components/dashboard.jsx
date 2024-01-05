import React from "react";
import { Button } from "@mui/material";
import { TicketTable } from "./TicketTable";
import tickets from '../assets/data/dummy-tickets.json';

function DashboardPage() {
  return (
    <div>
    <Button
      variant="contained"
      color="success"
      style={{ "font-size": "2rem", padding: "10px 30px"  }}
    >
      New Ticket
    </Button>
    <div>
        Total Tickets: 50
    </div>
    <div>
        Pending Tickets: 5
    </div>
    <div style={{'margin-top':'10px' ,'text-align':'center' }}>
        Recently Added Tickets
    </div>
    <hr />
    <div>
        <TicketTable tickets={tickets}/>
    </div>
    </div>
    
  );
}

export default DashboardPage;
