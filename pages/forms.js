import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Grid,
  Stack,
  TextField,
  InputLabel,
  Dialog,
  MenuItem,
  Button,
  Alert,
} from "@mui/material";


import React, { useState, useEffect } from "react";
import BaseCard from "../src/components/baseCard/BaseCard";

const Forms = () => {
  const [allergies, setallergies] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setallergies(e.target.value);
  };

  const handleOnClick = () => {
    setOpen(!open);
  }


  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Хэрэглэгч бүртгэх хэсэг">
          <Stack spacing={3}>
            <TextField
              id="name-basic"
              label="Нэр"
              variant="outlined"
            />
            <TextField
              id="name-basic"
              label="Овог"
              variant="outlined"
            />

            <TextField id="email-basic" label="регистрийн дугаар" variant="outlined" />
            <InputLabel id="demo-simple-select-label">Харшилтай юу?</InputLabel>
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
            <TextField
              id="outlined-multiline-static"
              label="Гэрийн хаяг"
              multiline
              rows={4}
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
            />
            <TextField
              id="name-basic"
              label="Мэрэгжил"
              variant="outlined"
            />
            <TextField
              id="name-basic"
              label="Ажилийн газарийн хаяг"
              variant="outlined"
            />
            {/* <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Terms & Condition"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
            </FormGroup> */}
            {/* <FormControl>
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
            </FormControl> */}
          </Stack>
          <br />
          <Button variant="contained" mt={2} onClick={handleOnClick}  >
            Бүртгэх
          </Button>
          <Dialog open={open} onClose={handleOnClick}>
          <Alert  severity="success">
              Амжилтай хадгаллаа
            </Alert>
          </Dialog>
        </BaseCard>
      </Grid>

      {/* <Grid item xs={12} lg={12}>
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
      </Grid> */}
    </Grid>
  );
};

export default Forms;
