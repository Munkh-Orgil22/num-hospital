import Select, { SelectChangeEvent } from "@mui/material/Select";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
import {
  Grid,
  Stack,
  TextField,
  InputLabel,
  Dialog,
  MenuItem,
  Button,
  Alert,
  CircularProgress
} from "@mui/material";


import React, { useState, useEffect } from "react";
import FullLayout from "../src/layouts/FullLayout";
import BaseCard from "../src/components/baseCard/BaseCard";
import axios from 'axios';


const Forms = () => {
  const [allergies, setallergies] = useState("");
  const [open, setOpen] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [requestry, setRequestry] = useState("");
  // const [allergies, setAllergies] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  const [profession, setProfession] = useState("");
  const [jobaddress, setJobaddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setallergies(e.target.value);
  };


  const handleOnClick = async () => {
    setIsLoading(true);
    const data = {
      userid: null,
      firstname: firstname,
      lastname: lastname,
      requestry: requestry,
      allergies: allergies,
      address: address,
      education: education,
      profession: profession,
      jobaddress: jobaddress
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      },
      data: data,
      url: "http://localhost:8080/user-service/api/saveUser"
    };
    const response = await axios(options);

    if (response.status == 200) {
      setIsLoading(false);
      setOpen(!open);
    }

    // setOpen(!open);
  }
  const handleOnCloseDialgo = () => {
    setOpen(!open);
    setFirstname("");
    setLastname("");
    setRequestry("");
    setallergies("");
    setAddress("");
    setEducation("");
    setProfession("");
    setJobaddress("");
  }


  return (
    <FullLayout>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          {isLoading ?   
          <div style={{width:"100%",display:"flex",justifyContent:"center", marginTop:"20%"}}>
                     <CircularProgress />
          </div>:
            <BaseCard title="Хэрэглэгч бүртгэх хэсэг">
              <Stack spacing={3}>
                <TextField
                  id="name-basic"
                  label="Нэр"
                  variant="outlined"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
                <TextField
                  id="name-basic"
                  label="Овог"
                  defaultValue={lastname}
                  variant="outlined"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />

                <TextField id="name-basic"
                  label="регистрийн дугаар"
                  variant="outlined"
                  defaultValue={requestry}
                  onChange={(e) => {
                    setRequestry(e.target.value);
                  }}
                />
                <InputLabel id="demo-simple-select-label">Харшилтай юу?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={allergies}
                  label="Харшил"
                  style={{ color: "black" }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <MenuItem value={"Тийм"}>Тийм</MenuItem>
                  <MenuItem value={"Үгүй"}>Үгүй</MenuItem>
                </Select>
                <TextField
                  id="outlined-multiline-static"
                  label="Гэрийн хаяг"
                  multiline
                  defaultValue={address}
                  rows={4}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                {/* <TextField
              error
              id="er-basic"
              label="Error"
              defaultValue="ad1avi"
              variant="outlined"
            /> */}
                <TextField
                  id="name-basic"
                  label="Боловсрол"
                  variant="outlined"
                  defaultValue={education}
                  onChange={(e) => {
                    setEducation(e.target.value);
                  }}
                />
                <TextField
                  id="name-basic"
                  label="мэргэжил"
                  variant="outlined"
                  defaultValue={profession}
                  onChange={(e) => {
                    setProfession(e.target.value);
                  }}
                />
                {/* <TextField
                id="name-basic"
                label="Ажилийн газарийн хаяг"
                variant="outlined"
                onChange={(e)=> {
                  setJobaddress(e.target.value);
                 }}
              /> */}
                <InputLabel id="demo-simple-select-label">Ажлын газрын хаяг</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={jobaddress}
                  label="хаяг"
                  variant="outlined"
                  onChange={(e) => setJobaddress(e.target.value)}
                >
                  <MenuItem value={"ХШУИС"}>ХШУИС</MenuItem>
                  <MenuItem value={"ХУС"}>ХУС</MenuItem>
                  <MenuItem value={"НУС"}>НУС</MenuItem>
                  <MenuItem value={"БУС"}>БУС</MenuItem>
                  <MenuItem value={"БС"}>БС</MenuItem>
                  <MenuItem value={"ОХНУС"}>ОХНУС</MenuItem>
                  <MenuItem value={"БУСАД"}>БУСАД</MenuItem>

                </Select>


              </Stack>
              <br />
              <Button variant="contained" mt={2} onClick={handleOnClick}  >
                Бүртгэх
              </Button>
              <Dialog open={open} onClose={handleOnCloseDialgo}>
                <Alert severity="success">
                  Амжилтай хадгаллаа
                </Alert>
              </Dialog>
            </BaseCard>
          }
        </Grid>

      </Grid>
    </FullLayout>
  );
};

export default Forms;
