import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
function createData(name, status, openDate) {
    return { name, status, openDate };
  }

  const rows = [
    createData('ssl issue', 'client response pending','2024-2-1'),
    createData('ssl issue', 'client response pending','2024-2-1'),
    createData('ssl issue', 'client response pending','2024-2-1'),
    createData('ssl issue', 'client response pending','2024-2-1'),
    createData('ssl issue', 'client response pending','2024-2-1'),
    
  ];
export const TicketTable = ({tickets}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Open Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.length ?
          tickets.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.addedAt}</StyledTableCell>
            </StyledTableRow>
          ))
        :
        <StyledTableRow>
            <StyledTableCell>
            No Tickets to show
            </StyledTableCell>
        </StyledTableRow>
       
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
