import React from "react";
import {Grid, Paper, Avatar , TextField, Button} from "@mui/material";
import Image from "next/image";
import LogoMuis from "../../../assets/images/logos/muisLogo.svg"
function LoginPage() 
{

    const paperStyle = {padding : 20, height:'70vh' ,width:280, margin:'20px auto'}
    const avatarStyle = {backgroundColor:"#1bbd7e"}

    return ( 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Image src={LogoMuis} alt={"Logo"} with={100} height={100} />
                <h1>Нэвтрэх</h1>
                </Grid>
                <TextField label="Нэвтрэх нэр" placeholder="Нэвтрэх нэр" fullWidth required />
                <br/>
                <br/>
                <TextField label="Нууц үг" placeholder="Нууц үг" type='password' fullWidth required />
                <br/>
                <br/>
                <Button type='submit' color="primary" variant="contained" fullWidth required>Нэвтрэх</Button>
            </Paper>
        </Grid>

     );
}

export default LoginPage;