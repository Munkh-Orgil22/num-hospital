import {
    Grid,
    Stack,
    TextField,
    Dialog,
    Button,
    Alert,
    Container,
    InputLabel,
    MenuItem,
    AlertTitle,
    InputAdornment
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useState, useEffect } from "react";
import BaseCard from "../src/components/baseCard/BaseCard";
import { useRouter } from 'next/router'
import axios from 'axios';
import FullLayout from "../src/layouts/FullLayout";	
import Select from "@mui/material/Select";
import SearchIcon from '@mui/icons-material/Search';


const inspection = () => {
    const router = useRouter();

    const [inspectiontype, setInspectiontype] = useState("");
    const [diagnosis , setDiagnosis] = useState("");
    const [reason, setReason] = useState("");
    // suuri owchdei eseh
    const [isdisease, setIsdisease] = useState("");
    // 13 maygt 
    const [ isam13, setIsam13] = useState("");
    const [treatment, setTreatment] = useState("");
    // saajiltai eseh 
    const [paralyzed, setParalyzed] = useState("");
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("");
    const {userid, vitalsignid} = router.query;

    const [isnext , setIsnext] = useState(false);


    const handleChange = (e) => {
        setallergies(e.target.value);
    };
    const handleOnCloseDialgo =()=>{
        setOpen(!open);
    }

    

    const handleOnClick = async () => {
        const data = {
            "inspectionid": null,
            "userid": parseInt(userid),
            "vitalsignid": parseInt(vitalsignid),
            "inspectiontype": inspectiontype,
            "diagnosis": diagnosis,
            "reason": reason,
            "isdisease": isdisease,
            "isAm13": isam13,
            "treatment": treatment,
            "isparalyzed": paralyzed,
            "createdate" : date
        }

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' ,
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")},
            data: data,
            url : "http://localhost:8080/doctor-service/api/inspection/saveInspection"
        };
        const response = await axios(options);
        
        if(response.status == 200)
        {
            setOpen(!open);
        }
        
    }
    const fetchData = async (registry) => {
        const response = await axios('http://localhost:8080/user-service/api/user/' + registry);
        setUserId(response.data.userid)
    }
    const handlePush = async () => {

        setIsnext(true);
        // http://localhost:8081/user-service/api/user/
        // await fetchData(registry);
        // if (userId > 0) {
        //     router.push("/inspection?user=" + userId);
        // }
    }


    return (
        <FullLayout>
        <Container>
            {/* {url == "/inspection?user=" + userId ? */}
            
            {/* <BaseCard title="Регистрийн дугаараа оруулнуу">
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
               <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <BaseCard title={`Үзлэг бүртгэх хэсэг`}>
                        <Stack spacing={3}>

                            <TextField
                                id="name-basic"
                                label="Үзлэгийн төрөл"
                                variant="outlined"
                                onChange={(e)=>setInspectiontype(e.target.value)}
                            />
                            <TextField
                                id="name-basic"
                                label="Онош"
                                variant="outlined"
                                onChange={(e)=>setDiagnosis(e.target.value)}
                            />

                            <TextField id="name-basic" label="Шалтгаан"
                             variant="outlined" 
                             onChange={(e)=>setReason(e.target.value)}
                             />
                            <InputLabel id="demo-simple-select-label">Суурь өвчтэй эсэх</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={isdisease}
                                label="Харшил"
                                variant="outlined"
                                onChange={(e)=>setIsdisease(e.target.value)}
                            >
                                <MenuItem value={1}>Тийм</MenuItem>
                                <MenuItem value={0}>Үгүй</MenuItem>
                            </Select>
                            <InputLabel id="demo-simple-select-label">13 маягт бөглөсөн эсэх</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={isam13}
                                label="Харшил"
                                variant="outlined"
                                onChange={(e)=>setIsam13(e.target.value)}
                            >
                                <MenuItem value={1}>Тийм</MenuItem>
                                <MenuItem value={0}>Үгүй</MenuItem>
                            </Select>
                            <TextField id="name-basic" label="Эмчилгээ" 
                            variant="outlined" 
                            onChange={(e)=>setTreatment(e.target.value)}
                            />
                            <InputLabel id="demo-simple-select-label">Саажилттай эсэх</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={paralyzed}
                                label="Харшил"
                                variant="outlined"
                                onChange={(e)=>setParalyzed(e.target.value)}
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
                            <Dialog open={open} onClose={handleOnCloseDialgo}>
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
        </FullLayout>


    );
};

export default inspection;
