import { Grid, TextField, InputAdornment, Button } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useRouter } from 'next/router';
import FullLayout from "../src/layouts/FullLayout";
import axios from 'axios';
import UserInfo from "../src/components/dashboard/UserInfo";
import VitalSigns from "../src/components/dashboard/VitalSigns"
import InspectionInfo from "../src/components/dashboard/InspectionInfo"

const Tables = () => {
  const router = useRouter();
  const [isnext, setIsnext] = useState(false); 
  const [registry, setRegistry] = useState("");
  const [user, setUser] = useState({});
  const [userid , setUserid] = useState(null);
  // const handlePush = () => {
  //   router.push("/news?userRegister=" + registry);
  // }
  const handleOnNext = () => {
    async function fetch()
    {
      const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        },
        url: "http://localhost:8080/user-service/api/user/" + registry
    };
    try {
        let res = await axios(options);
        if (res.status ==200 && res.data.code == 200) {
            setIsnext(!isnext);
           setUserid(res.data.data.userId);
           setUser(res.data.data);
        }
        else {
            setOpen(!open);
        }
    } catch (e) {

    }
    }
    fetch();
  }


  return (
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Регистрийн дугаараа оруулнуу">
          <TextField
            id="input-with-icon-textfield"
            label="Регистрийн дугаар"
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

      </Grid>
      {isnext ? <Grid item xs={12} lg={12}>
                <UserInfo data={user} />
                {userid != null &&
                <div><VitalSigns  userid={userid} />
                <InspectionInfo userid={userid} />
                </div>
                }

            </Grid> : ""}
    </Grid>
    </FullLayout>
  );
};

export default Tables;
