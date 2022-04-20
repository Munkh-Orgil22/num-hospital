import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
  Fab

} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import FeatherIcon from "feather-icons-react";
// import dailog from "../dialog"

const users = [
  {
    id: "1",
    firstName: "Болд",
    lastName: "Бат",
    requestry: "ФБ00320812",
    allergies: "Тийм",
    address: "4",
    education: "Дээд",
    profession: "Программ хангамж",
    jobaddress: "Clinica"
  },
  {
    id: "2",
    firstName: "Болд",
    lastName: "Бат",
    requestry: "ФБ00320812",
    allergies: "Тийм",
    address: "4",
    education: "Дээд",
    profession: "Программ хангамж",
    jobaddress: "Clinica"
  },
  {
    id: "3",
    firstName: "Болд",
    lastName: "Бат",
    requestry: "ФБ00320812",
    allergies: "Тийм",
    address: "4",
    education: "Дээд",
    profession: "Программ хангамж",
    jobaddress: "Clinica"
  },
  {
    id: "4",
    firstName: "Болд",
    lastName: "Бат",
    requestry: "ФБ00320812",
    allergies: "Тийм",
    address: "4",
    education: "Дээд",
    profession: "Программ хангамж",
    jobaddress: "Clinica"
  },
];

const UserInfo = () => {
  const [open, setopen] = useState(false);

  const handleOnClick = () => {
    setopen(!open);
  }
  return (

    <BaseCard title="Хэрэглэгчийн мэдээлэл">
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
                Овог
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Нэр
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Регистрийн дугаар
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Харшилтай эсэх
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Хаяг
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Боловсрол
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Хөтөлбөр
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Ажлын газрын хаяг
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
          {users.map((user) => (
            // console.log(user.firstName),
            <TableRow key={user.id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {user.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                    // sx={{
                    //   fontWeight: "600",
                    // }}
                    >
                      {user.firstName}
                    </Typography>
                    {/* <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {user.post}
                    </Typography> */}
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.lastName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.requestry}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.allergies}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.address}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.education}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.profession}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.jobaddress}
                </Typography>
              </TableCell>
              {/* <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: user.pbg,
                    color: "#fff",
                  }}
                  size="small"
                  label={user.priority}
                ></Chip>
              </TableCell> */}
              {/* <TableCell>
                <Typography variant="h6">${user.budget}k</Typography>
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
    </BaseCard>
  );
};



export default UserInfo;


