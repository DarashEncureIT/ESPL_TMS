import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const UpdateTicket = ({msg,handleOnchange,handleOnsubmit}) => {
  return (
    
    <form onSubmit={handleOnsubmit}>
    <FormControl fullWidth>
        <TextField
          id="outlined-textarea"
          label="Reply"
          placeholder="Please reply to the message here"
          value={msg}
          onChange={handleOnchange}
          rows={4}
          multiline
        />
        </FormControl>
        <div style={{margin:"10px", display:"flex",justifyContent:"right"}}>
        <Button type='submit' variant="contained" >Reply</Button>
        </div>
        
        </form>
  )
}
