import {
    Grid,
    Stack,
    TextField,
    Dialog,
    Button,
    Alert,
    AlertTitle,
    Container
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useState, useEffect } from "react";
import BaseCard from "../src/components/baseCard/BaseCard";
import { useRouter } from 'next/router'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FullLayout from "../src/layouts/FullLayout";
import axios from 'axios';

const inspection = () => {
    const router = useRouter();
    const url = router.asPath;
    const [allergies, setallergies] = useState("");
    const [open, setOpen] = useState(false);
    const [registry, setRegistry] = useState("");

    // start 
    const [arterialbloodpressure, setArterialbloodpressure] = useState("");
    const [head, setHead] = useState(0);
    const [bloodoxysupply, setBloodoxysupply] = useState("");
    const [numberofbreaths, setNumberofbreaths] = useState(0);
    const [date, setDate] = useState("");
    // end
    const [isnext, setIsnext] = useState(false);

    // const [userId, setUserId] = useState(parseInt(url.substring(17)));

    const [userId, setUserId] = useState(0);
    const [vitalsignid, setVitalsignid] = useState(0);
    const [status, setStatus] = useState(false);

    const handleOnClose = () => 
    {
        setOpen(!open);
        if(status)
        {
            router.push("/inspection?userid=" + userId +"&vitalsignid=" +vitalsignid)
        }
    };

    const handleOnClick = async () => {
          const data = {
            vitalsignid: 0,
            userid: userId,
            arterialbloodpressure: arterialbloodpressure,
            head: parseInt(head),
            bloodoxysupply: bloodoxysupply,
            numberofbreaths: parseInt(numberofbreaths),
            createdate: "" + date
          }
          const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            },
            data: data,
            url: "http://localhost:8080/doctor-service/api/vitalsigns/saveVitalsigns"
          };

        const res = await axios(options);
        // console.log(res.data);
        if(res.status==200)
        {
            setVitalsignid(res.data.vitalsignid);
            setOpen(!open);
            setStatus(true);
        }
        else {
            setOpen(!open);
            setStatus(false);
        }


    }

    const handleOnNext = async () => {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            },
            url: "http://localhost:8080/user-service/api/user/" + registry
        };
        try {
            const res = await axios(options);
            if (res.status && res.data.code == 200) {
                setUserId(res.data.data.userId)
                setIsnext(true);
            }
            else {
                setOpen(!open);
            }
        } catch (e) {

        }

    }

    return (
        <FullLayout>
            <Container>
                {/* {url == "/inspection?user=" + userId ? */}

                <BaseCard title="???????????????????? ???????????????? ????????????????">
                    <TextField
                        id="input-with-icon-textfield"
                        label="???????????????????? ????????????"
                        value={registry}
                        onChange={(e) => setRegistry(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <Button onClick={handleOnNext}>
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </BaseCard>
                <Dialog open={open} onClose={handleOnClose}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} lg={12}>
                            <Stack spacing={2}>
                                <Alert severity="info">
                                    <AlertTitle>???????????????????? ?????????????????? ??????????.</AlertTitle>
                                    <strong>???????????????????? ?????????????????? ??????????.</strong><br />
                                </Alert>

                            </Stack>
                        </Grid>
                    </Grid>


                </Dialog>

                {isnext ? <Grid container spacing={0}>
                    <Grid item xs={12} lg={12}>
                        <BaseCard title={`?????????????????? ?????????????? ??????????`}>
                            <Stack spacing={3}>

                                <TextField
                                    id="name-basic"
                                    label="???????????????? ?????????? ????????????"
                                    variant="outlined"
                                    onChange={(e) => setArterialbloodpressure(e.target.value)}
                                />
                                <TextField
                                    id="name-basic"
                                    label="?????????????? ??????????????"
                                    variant="outlined"
                                    type="number"
                                    onChange={(e) => setHead(e.target.value)}
                                />

                                <TextField id="name-basic"
                                    label="?????????? ???????????????????????????? ??????????????"
                                    variant="outlined"
                                    onChange={(e) => setBloodoxysupply(e.target.value)}
                                />


                                <TextField
                                    id="name-basic"
                                    label="?????????????????? ??????"
                                    type="number"
                                    onChange={(e) => setNumberofbreaths(e.target.value)}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="??????????"
                                        value={date}
                                        minDate={new Date()}
                                        onChange={(newValue) => {
                                            setDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                {/* <br /> */}
                                <Button variant="contained" mt={2} onClick={handleOnClick}  >
                                    ??????????????
                                </Button>
                                {status ? <Dialog open={open} onClose={handleOnClose}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} lg={12}>
                                            <Stack spacing={2}>
                                                <Alert severity="success">
                                                    <AlertTitle>????????????????</AlertTitle>
                                                    <strong>???????????????? ?????????????? ?????????? </strong><br />
                                                </Alert>

                                            </Stack>
                                        </Grid>
                                    </Grid>


                                </Dialog> : <Dialog open={open} onClose={handleOnClose}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} lg={12}>
                                            <Stack spacing={2}>
                                                <Alert severity="error">
                                                    <AlertTitle>??????????????????</AlertTitle>
                                                    <strong>?????????????????? </strong><br />
                                                </Alert>

                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Dialog>}
                            </Stack>
                        </BaseCard>
                    </Grid>
                </Grid> : ""}
                {/* :
                <BaseCard title="???????????????????? ???????????????? ????????????????">
                    <TextField
                        id="input-with-icon-textfield"
                        label="???????????????????? ????????????"
                        value={registry}
                        onChange={(e) => setRegistry(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <Button onClick={handlePush}>
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </BaseCard> */}

                {/* } */}
            </Container>
        </FullLayout>


    );
};

export default inspection;
