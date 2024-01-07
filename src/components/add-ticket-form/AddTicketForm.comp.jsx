import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";

export const AddTicketForm = ({handleOnSubmit,handleOnchange,frmDt}) => {
    console.log(frmDt);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const textStyle = { margin: "12px 0" };
  return (
    <form onSubmit={handleOnSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>New Ticket</h2>
          </Grid>
          <TextField
            style={textStyle}
            id="outlined-basic"
            onChange={handleOnchange}
            name="subject"
            value={frmDt.subject}
            label="Subject"
            variant="outlined"
            type="text"
            fullWidth
            required
          />
          <TextField
            style={textStyle}
            id="outlined-basic"
            onChange={handleOnchange}
            name="issueDate"
            value={frmDt.issueDate}
            variant="outlined"
            type="Date"
            fullWidth
            required
          />
          <TextField
            id="outlined-multiline-flexible"
            style={textStyle}
             onChange={handleOnchange}
            name="details"
             value={frmDt.details}
            label="Details"
            variant="outlined"
            type="text"
            multiline
            maxRows={4}
            fullWidth
            required
          />
          <Button style={textStyle} type="submit" variant="contained" fullWidth>
            New Ticket
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};
