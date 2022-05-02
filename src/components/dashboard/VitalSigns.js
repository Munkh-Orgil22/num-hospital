import React, { useState, useEffect } from "react";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button,
    Dialog,
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Fab,
    TableContainer

} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import FeatherIcon from "feather-icons-react";
import axios from 'axios';

// import dailog from "../dialog"

// const vitalsigns = [
//     {
//         vitalsignid: "13",
//         userid: "9",
//         arterialbloodpressure: "lfdkfl",
//         head: "98",
//         bloodoxysupply: "110",
//         numberofbreaths: "160",
//         createdate: "2022-04-06",
//     },
//     {
//         vitalsignid: "13",
//         userid: "9",
//         arterialbloodpressure: "lfdkfl",
//         head: "98",
//         bloodoxysupply: "110",
//         numberofbreaths: "160",
//         createdate: "2022-04-06",
//     },
//     {
//         vitalsignid: "13",
//         userid: "9",
//         arterialbloodpressure: "lfdkfl",
//         head: "98",
//         bloodoxysupply: "110",
//         numberofbreaths: "160",
//         createdate: "2022-04-06",
//     },
//     {
//         vitalsignid: "13",
//         userid: "9",
//         arterialbloodpressure: "lfdkfl",
//         head: "98",
//         bloodoxysupply: "110",
//         numberofbreaths: "160",
//         createdate: "2022-04-06",
//     },
// ];

const VitalSigns = (props) => {
    const [open, setopen] = useState(false);
    const [vitalsigns , setVitalsigns] = useState([]);

    useEffect(async () =>{

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            },
            url: "http://localhost:8080/doctor-service/api/vitalsigns/" + props.userid
        };
        try {
            const res = await axios(options);
            console.log(res.status);
            if (res.status ==200 && res.data.code == 200) {
            //    console.log(res.data.data);
               setVitalsigns(res.data.data)
            }
            else {
                
            }
        } catch (e) {
    console.log(e);
        }
    },[]);

    const handleOnClick = () => {
        setopen(!open);
    }
    return (

        <BaseCard title="Амин үзүүлэлт">
            <TableContainer style={{ width: '100%' }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        mt: 3,
                        whiteSpace: "nowrap",
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Дугаар
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Хэрэглэгчийн дугаар
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Артерийн даралт
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Толгой
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Цусан дахь хүчилтөрөгчийн хангамж
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Амьсгалын тоо
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Бүртгүүлсэн огноо
                                </Typography>
                            </TableCell>

                            {/* <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Харшилтай эсэх
              </Typography>
            </TableCell> */}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log(vitalsigns)}
                        {vitalsigns.map((vitalsign) => (
                            // console.log(vitalsign.firstName),
                            <TableRow key={vitalsign.vitalsignid}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {vitalsign.vitalsignid}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {vitalsign.userid}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {vitalsign.arterialbloodpressure}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {vitalsign.head}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {vitalsign.bloodoxysupply}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {vitalsign.numberofbreaths}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {vitalsign.createdate}
                                    </Typography>
                                </TableCell>
                                {/* <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: vitalsign.pbg,
                    color: "#fff",
                  }}
                  size="small"
                  label={vitalsign.priority}
                ></Chip>
              </TableCell> */}
                                {/* <TableCell>
                <Typography variant="h6">${vitalsign.budget}k</Typography>
              </TableCell> */}
                                <TableCell>
                                    {/* <Button variant="outlined" onClick={handleOnClick}>
                                    Edit
                                </Button> */}
                                    <Fab aria-label="add" color="primary" onClick={handleOnClick}>
                                        <FeatherIcon icon="edit" width="20" height="20" />
                                    </Fab>
                                    <Dialog open={open} onClick={handleOnClick} >
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} lg={12}>
                                                <BaseCard title="Form Layout">
                                                    <Stack spacing={3}>
                                                        <TextField
                                                            id="name-basic"
                                                            label="Name"
                                                            variant="outlined"
                                                            defaultValue="Nirav Joshi"
                                                        />
                                                        <TextField id="email-basic" label="Email" variant="outlined" />
                                                        <TextField
                                                            id="pass-basic"
                                                            label="Password"
                                                            type="password"
                                                            variant="outlined"
                                                        />
                                                        <TextField
                                                            id="outlined-multiline-static"
                                                            label="Text Area"
                                                            multiline
                                                            rows={4}
                                                            defaultValue="Default Value"
                                                        />
                                                        <TextField
                                                            error
                                                            id="er-basic"
                                                            label="Error"
                                                            defaultValue="ad1avi"
                                                            variant="outlined"
                                                        />
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={<Checkbox defaultChecked />}
                                                                label="Terms & Condition"
                                                            />
                                                            <FormControlLabel
                                                                disabled
                                                                control={<Checkbox />}
                                                                label="Disabled"
                                                            />
                                                        </FormGroup>
                                                        <FormControl>
                                                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                                            <RadioGroup
                                                                aria-labelledby="demo-radio-buttons-group-label"
                                                                defaultValue="female"
                                                                name="radio-buttons-group"
                                                            >
                                                                <FormControlLabel
                                                                    value="female"
                                                                    control={<Radio />}
                                                                    label="Female"
                                                                />
                                                                <FormControlLabel
                                                                    value="male"
                                                                    control={<Radio />}
                                                                    label="Male"
                                                                />
                                                                <FormControlLabel
                                                                    value="other"
                                                                    control={<Radio />}
                                                                    label="Other"
                                                                />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Stack>
                                                    <br />
                                                    <Button variant="contained" mt={2}>
                                                        Submit
                                                    </Button>
                                                </BaseCard>
                                            </Grid>

                                            <Grid item xs={12} lg={12}>
                                                <BaseCard title="Form Design Type">
                                                    <Stack spacing={3} direction="row">
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Outlined"
                                                            variant="outlined"
                                                        />
                                                        <TextField id="filled-basic" label="Filled" variant="filled" />
                                                        <TextField
                                                            id="standard-basic"
                                                            label="Standard"
                                                            variant="standard"
                                                        />
                                                    </Stack>
                                                </BaseCard>
                                            </Grid>
                                        </Grid>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </BaseCard>
    );
};



export default VitalSigns;


