import {
    Grid,
    Stack,
    TextField,
    Dialog,
    Button,
    Alert,
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
    const handlePush = async () => {

        // http://localhost:8081/user-service/api/user/
        await fetchData(registry);
        if (userId > 0) {
            router.push("/inspection?user=" + userId);
        }
    }


    return (
        <FullLayout>
        <Container>
            {url == "/inspection?user=" + userId ?
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={12}>
                        <BaseCard title={`Хэрэглэгч бүртгэх хэсэг ${userId}`}>
                            <Stack spacing={3}>

                                <TextField
                                    id="name-basic"
                                    label="артерийн цусны даралт"
                                    variant="outlined"
                                />
                                <TextField
                                    id="name-basic"
                                    label="Зүрхний зохиолт"
                                    variant="outlined"
                                />

                                <TextField id="email-basic" label="цусны хүчилтөрөгчийн хангамж" variant="outlined" />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="амьсгалын тоо"
                                    multiline
                                    rows={4}
                                />
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
                :
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
                </BaseCard>

            }
        </Container>
        </FullLayout>


    );
};

export default inspection;
