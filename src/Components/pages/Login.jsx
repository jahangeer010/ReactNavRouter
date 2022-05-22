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
export default function Login() {
   
    return (
        <>
        
        <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Box sx={{display:"flex",justifyContent:"center",alignContent:"center", height:"70vh" , marginTop:"140px"}}>
     

        <Card sx={{ maxWidth: 345}}>
        <Typography variant="h5" sx={{color:'Green'}}>Wellcome to Mui Asignemnt</Typography>
        <CardMedia sx={{borderRadius:20}}
            component="img"
            height="100"

            image="/images/login.png"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingLeft:10}}>
                User Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
        
            <TextField id="filled-basic" label="Enter User Name" variant="outlined" /></Typography>
            <Typography variant="body2" color="text.secondary">
        
            <TextField sx={{marginTop:3}} id="filled-basic" label="Enter Password" variant="outlined" type="password" />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">    <Typography><NavLink to='../' style={{textDecoration:'none'}}>Login to Dasboard</NavLink></Typography></Button>
            <Button size="small">    <Typography><NavLink to='../Logout' style={{textDecoration:'none'}}>Exit</NavLink></Typography></Button>
            
        </CardActions>
    </Card></Box></Grid></Grid></>
    );
}
