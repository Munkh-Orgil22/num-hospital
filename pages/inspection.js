import {
    Grid,
    Stack,
    TextField,
    Dialog,
    Button,
    Alert
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useState, useEffect } from "react";
import BaseCard from "../src/components/baseCard/BaseCard";
import { useRouter } from 'next/router'
import Link from 'next/link'

const inspection = () => {
    const router = useRouter();
    const url = router.asPath;
    const [allergies, setallergies] = useState("");
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("");

    const handleChange = (e) => {
        setallergies(e.target.value);
    };

    const handleOnClick = () => {
        setOpen(!open);
    }

    const handlePush =()=>{
        console.log(url);
        router.push(url);
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="Хэрэглэгч бүртгэх хэсэг">
                    {url == "/inspection?user=" ? <Stack spacing={3}>
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
                        : 
                         <Link href="/inspection?user=" passHref>
                         <Button variant="contained" mt={2} onClick={handlePush}  >
                            Бүртгэх
                        </Button>
                       </Link>
                        
                        }
                </BaseCard>
            </Grid>
        </Grid>
    );
};

export default inspection;
