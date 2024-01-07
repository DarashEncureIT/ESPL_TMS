import React from 'react'
import { Breadcrumb } from '../Breadcrumb'
import { Container} from '@mui/material'
import tickets from '../../assets/data/dummy-tickets.json';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MsgHistory  } from '../msgHistory/MsgHistory';
import { UpdateTicket } from '../update-ticket/UpdateTicket';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

// const ticket = tickets[0];
export const Ticket = () => {
const {tid}=useParams()

    const [message,setMessage]=useState('');
    const [ticket,setTicket]=useState('');

    useEffect(()=>{
        for(let i=0;i<tickets.length;i++)
        {
            if(tickets[i].id==tid)
            {
                setTicket(tickets[i]);
                continue;
            }
        }
    },[message,tid])
    const handleOnchange=e=>{
        setMessage(e.target.value);
    };
    const handleOnsubmit =(e)=>{
        e.preventDefault();
        alert('Form Submitted');
    }
  return (
    <Container>
        <div>
            <Breadcrumb page='Ticket'/>
        </div>
        <br />
        <Box>
            
        <Typography variant="overline" className='subject' display="block" gutterBottom>Subject: {ticket.subject}</Typography>
        <Typography variant="overline" className='status' display="block" gutterBottom>Status: {ticket.status}</Typography>
        <Typography variant="overline" className='addedOn' display="block" gutterBottom>Ticket Opened: {ticket.addedAt}</Typography>
        </Box>
        <Box display="flex" justifyContent='right' >
        <Button variant="outlined" >Close Ticket</Button>
        </Box>
        <Box marginTop="40px">
            {ticket.history && <MsgHistory msg={ticket.history}/>}
            
        </Box>
        <hr />
        <Box marginTop="40px">
            <UpdateTicket msg={message} handleOnchange={handleOnchange}
            handleOnsubmit={handleOnsubmit}/>
        </Box>
        </Container>

   
  )
}
