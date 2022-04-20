import {
    Grid,
    Stack,
    TextField,
    Dialog,
    Button,
    Alert,
    Container,
    InputLabel,
    MenuItem
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useState, useEffect } from "react";
import BaseCard from "../src/components/baseCard/BaseCard";
import { useRouter } from 'next/router'
import Link from 'next/link'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Select, { SelectChangeEvent } from "@mui/material/Select";

const inspection = () => {
    const router = useRouter();
    const url = router.asPath;
    const [isdisease, am13, allergies, setallergies] = useState("");
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("");
    const [registry, setRegistry] = useState("");
    const [userId, setUserId] = useState(parseInt(url.substring(17)));

    const handleChange = (e) => {
        setallergies(e.target.value);
    };

    const handleOnClick = () => {
        setOpen(!open);
    }
    const fetchData = async (registry) => {
        const response = await axios('http://localhost:8081/user-service/api/user/' + registry);
        setUserId(response.data.userid)
    }
    // const handlePush = async () => {

    //     // http://localhost:8081/user-service/api/user/
    //     await fetchData(registry);
    //     if (userId > 0) {
    //         router.push("/inspection?user=" + userId);
    //     }
    // }


    return (
        <Container>
            {/* {url == "/inspection?user=" + userId ? */}
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <BaseCard title={`Үзлэг бүртгэх хэсэг ${userId}`}>
                        <Stack spacing={3}>

                            <TextField
                                id="name-basic"
                                label="Үзлэгийн төрөл"
                                variant="outlined"
                            />
                            <TextField
                                id="name-basic"
                                label="Онош"
                                variant="outlined"
                            />

                            <TextField id="email-basic" label="Шалтгаан" variant="outlined" />
                            <InputLabel id="demo-simple-select-label">Суурь өвчтэй эсэх</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={isdisease}
                                label="Харшил"
                                variant="outlined"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Тийм</MenuItem>
                                <MenuItem value={0}>Үгүй</MenuItem>
                            </Select>
                            <InputLabel id="demo-simple-select-label">13 маягт бөглөсөн эсэх</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={am13}
                                label="Харшил"
                                variant="outlined"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Тийм</MenuItem>
                                <MenuItem value={0}>Үгүй</MenuItem>
                            </Select>
                            {/* <TextField
                                id="outlined-multiline-static"
                                label="Шалтгаан"
                                multiline
                                rows={4}
                            /> */}
                            <TextField id="email-basic" label="Эмчилгээ" variant="outlined" />
                            <InputLabel id="demo-simple-select-label">Саажилттай эсэх</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={allergies}
                                label="Харшил"
                                variant="outlined"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Тийм</MenuItem>
                                <MenuItem value={0}>Үгүй</MenuItem>
                            </Select>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="For desktop"
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
                                Бүртгэх
                            </Button>
                            <Dialog open={open} onClose={handleOnClick}>
                                <Alert severity="success">
                                    Амжилтай хадгаллаа
                                </Alert>
                            </Dialog>
                        </Stack>
                    </BaseCard>
                </Grid>
            </Grid>
            {/* :
                <BaseCard title="Регистрийн дугаараа оруулнуу">
                    <TextField
                        id="input-with-icon-textfield"
                        label="Регистрийн дугаар"
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


    );
};

export default inspection;
