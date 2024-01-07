import React from "react";
import { Button, Box } from "@mui/material";
import { TicketTable } from "./TicketTable";
import tickets from "../assets/data/dummy-tickets.json";
import { Breadcrumb } from "./Breadcrumb";
import { Link } from "react-router-dom";
function DashboardPage() {
  return (
    <div>
      <div>
        <Breadcrumb page={"Dashboard"} />
      </div>
      <Box display="flex" justifyContent="center">
        <Link to={'/ticketform'}>
          <Button
            variant="contained"
            color="success"
            style={{ "font-size": "2rem", padding: "10px 30px" }}
          >
            New Ticket
          </Button>
        </Link>
      </Box>
      <div>Total Tickets: 50</div>
      <div>Pending Tickets: 5</div>
      <div style={{ "margin-top": "10px", "text-align": "center" }}>
        Recently Added Tickets
      </div>
      <hr />
      <div>
        <TicketTable tickets={tickets} />
      </div>
    </div>
  );
}

export default DashboardPage;
