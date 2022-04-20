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
// import dailog from "../dialog"

const inspections = [
    {
        inspectionid: "13",
        userid: "9",
        vitalsigns: "-394538",
        inspectiontype: "98",
        diagnosis: "110",
        reason: "160",
        isdisease: "2022-04-06",
        isAm13: 0,
        treatment: "ttt",
        isparalyzed: "false"

    },
    {
        inspectionid: "13",
        userid: "9",
        vitalsigns: "null",
        inspectiontype: "98",
        diagnosis: "110",
        reason: "160",
        isdisease: "2022-04-06",
        isAm13: 0,
        treatment: "ttt",
        isparalyzed: "false"

    },
    {
        inspectionid: "13",
        userid: "9",
        vitalsigns: "null",
        inspectiontype: "98",
        diagnosis: "110",
        reason: "160",
        isdisease: "2022-04-06",
        isAm13: 0,
        treatment: "ttt",
        isparalyzed: "false"

    },
    {
        inspectionid: "13",
        userid: "9",
        vitalsigns: "null",
        inspectiontype: "98",
        diagnosis: "110",
        reason: "160",
        isdisease: "2022-04-06",
        isAm13: 0,
        treatment: "ttt",
        isparalyzed: "false"

    },
];

const inspectionsInfo = () => {
    const [open, setopen] = useState(false);

    const handleOnClick = () => {
        setopen(!open);
    }
    return (

        <BaseCard title="Үзлэгийн мэдээлэл">
            <TableContainer style={{ width: 1200 }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        mt: 3,
                        whiteSpace: "nowrap",
                        minWidth: 1050
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Үзлэгийн дугаар
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Хэрэглэгчийн дугаар
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Амин үзүүлэлт
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Үзлэгийн төрөл
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Оношлогоо
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Шалтгаан
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Суурь өвчтэй эсэх
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    13 маягт бөглсөн эсэх
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Эмчилгээ
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Саажилттай эсэх
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
                        {inspections.map((inspection) => (
                            // console.log(inspection.firstName),
                            <TableRow key={inspection.inspectionid}>
                                <TableCell align="center">
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {inspection.inspectionid}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.userid}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.vitalsigns}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.inspectiontype}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.diagnosis}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.reason}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.isdisease}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.isAm13}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.treatment}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="h6">
                                        {inspection.isparalyzed}
                                    </Typography>
                                </TableCell>
                                {/* <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: inspection.pbg,
                    color: "#fff",
                  }}
                  size="small"
                  label={inspection.priority}
                ></Chip>
              </TableCell> */}
                                {/* <TableCell>
                <Typography variant="h6">${inspection.budget}k</Typography>
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



export default inspectionsInfo;


