import React from "react";
import { Avatar, Button, Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useState } from "react";

function LoginForm()
{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
 
    const handleOnchange = e =>{
        const{name,value}=e.target;
        switch(name)
        {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;

                default:
                    break;
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault()
        if(!email || !password)
        {
            return alert("Fill all the fields")
        }
        console.log(email,password);
    };

    const paperStyle={padding:20,height:'70vh',width:280,margin:'20px auto'}
    const avatarStyle={backgroundColor:'#1f9a1f'}
    const textStyle={margin:'12px 0'}
    return(
        <form onSubmit={handleOnSubmit}>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
                <h2>Sign In</h2>
                </Grid>
                <TextField style={textStyle} id="outlined-basic"  onChange={handleOnchange} name="email" value={email} label="Email" variant="outlined" type="email" fullWidth  required/>
                <TextField id="outlined-basic" onChange={handleOnchange} name="password" value={password} label="Password" variant="outlined" type="password" fullWidth  required/>
                <FormControlLabel style={textStyle} control={<Checkbox  />} label="Remember Me" />
                <Button type="submit" variant="contained" color="success" fullWidth>Login</Button>

            </Paper>
        </Grid>
        </form>
    );
}

export default LoginForm;