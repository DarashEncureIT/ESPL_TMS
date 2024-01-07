import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
export const Breadcrumb = ({page}) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link  to={'/login'} style={{ color: 'inherit',textDecoration: 'none' }}>
          Home
        </Link>
        <Typography color="text.primary">{page}</Typography>
      </Breadcrumbs>
    </div>
  )
}
