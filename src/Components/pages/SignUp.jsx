import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import Appbar from '../Appbar'

export default function SignUp() {
    function HandleSignip(){
        alert("Thank you for Sign up  ")
    }   
    return (
        <>
        
        <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Box sx={{display:"flex",justifyContent:"center",alignContent:"center", height:"100vh" , marginTop:"10px"}}>
     

        <Card sx={{ maxWidth: 345}}>
        <Typography variant="h5" sx={{color:'Green'}}>Enter Details to SignUp </Typography>
        
         <CardMedia 
            component="img"
            height="200"

            image="/images/signup.jpg"
            alt="green iguana"
        />
        <CardContent> 
            <Typography gutterBottom variant="h5" component="div" sx={{paddingLeft:10}}>
            SignUp
            </Typography>
            <Typography variant="body2" color="text.secondary">
        
            <TextField id="filled-basic" label="Enter User Name" variant="outlined" /></Typography>
            <Typography variant="body2" color="text.secondary">
        
        
            <TextField sx={{marginTop:1}} id="filled-basic" label="Enter Email" variant="outlined" type="email"/></Typography>
            <Typography variant="body2" color="text.secondary">
        
            <TextField sx={{marginTop:1}} id="filled-basic" label="Enter Password" variant="outlined" type="password" />
            <TextField sx={{marginTop:1}} id="filled-basic" label="Confirm Password" variant="outlined" type="password" />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">   
             <Typography><NavLink to='../' style={{textDecoration:'none',textTransform:'capitalize'}} >Click SignUp</NavLink></Typography></Button>
        
            <NavLink to='../Login'><Typography>Login</Typography></NavLink>
        </CardActions>
    </Card></Box></Grid></Grid></>
    );
}