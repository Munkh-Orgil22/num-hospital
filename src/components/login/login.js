import React, { useState, useEffect } from "react";
import {Grid, Paper, Dialog , TextField, Button,Stack} from "@mui/material";
import Image from "next/image";
import LogoMuis from "../../../assets/images/logos/muisLogo.svg"
import axios from 'axios';
import qs from 'qs';
import { useRouter } from 'next/router';

function LoginPage() 
{
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [status , setStatus] = useState(false);

    const handleOnClick = async()=>
    {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(user),
            url : "http://localhost:8080/auths/api/login"
        };
        const response = await axios(options)
        .then(f=>
            {if(f.status == 200) {
               localStorage.setItem("access_token", f.data.access_token);
               localStorage.setItem("refresh_token", f.data.refresh_token);
                router.push("/");
            }
        }
            )
        .catch(e=>
            setStatus(true)
         )
        ;
    }
    

    const paperStyle = {padding : 20, height:'70vh' ,width:280, margin:'20px auto'}

    return ( 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Image src={LogoMuis} alt={"Logo"} with={100} height={100} />
                <h1>Нэвтрэх</h1>
                </Grid>
                <TextField label="Нэвтрэх нэр" placeholder="Нэвтрэх нэр" fullWidth required 
                onChange={(newValue)=>  setUser({username: newValue.target.value,password : user.password})} />
                <br/>
                <br/>
                <TextField label="Нууц үг" placeholder="Нууц үг" type='password' fullWidth required 
                onChange={(newValue)=>  setUser({username: user.username,password : newValue.target.value})}
                />
                <br/>
              { status?<p style={{color:"red"}}> Нэвтрэх нэр эсвэл нууц үг буруу байна. </p>:<br/>}
                <Button type='submit' color="primary" variant="contained" fullWidth required onClick={handleOnClick}>Нэвтрэх</Button>
            </Paper>
        </Grid>

     );
}

export default LoginPage;