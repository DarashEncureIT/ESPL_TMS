import React from 'react'
import { Breadcrumb } from './Breadcrumb'
import Button from '@mui/material/Button';
import { SearchForm } from './search-form/SearchForm';
import { useState,useEffect } from 'react';
import { TicketTable } from './TicketTable';
import tickets from '../assets/data/dummy-tickets.json';
import { Link } from 'react-router-dom';
export const TicketListing = () => {

    const [str,setStr]=useState('');
    const [dispTicket,setDispTicket]=useState(tickets);
    useEffect(()=>{
    },[str,dispTicket])
    const handleOnchange=e=>{
        const {value}=e.target;
        setStr(value);
        searchTicket(value);
    };
    const searchTicket = (sttr) =>{
        const displayTickets=tickets.filter((row)=>row.subject.toLowerCase().includes(sttr.toLowerCase()));
        setDispTicket(displayTickets);
    }

  return (
    <div>
        <div>
            <Breadcrumb page='Ticket List'/>
        </div>
        <div>
            <Link to={'/ticketform'}>
        <Button variant="contained">New Ticket</Button>
        </Link>
        </div>
        <div>
            <SearchForm handleOnchange={handleOnchange} str={str}/>
        </div>
        <hr />
        <div>
            <TicketTable tickets={dispTicket}/>
        </div>
    </div>
  )
}
