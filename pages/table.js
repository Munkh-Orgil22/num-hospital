import { Grid, TextField, InputAdornment, Button } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useRouter } from 'next/router';

const Tables = () => {


  const router = useRouter();


  const [registry, setRegistry] = useState(0);
  const handlePush = () => {
    router.push("/news?userRegister=" + registry);
  }


  return (
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
                  <Button onClick={handlePush}>
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </BaseCard>

      </Grid>
    </Grid>
  );
};

export default Tables;
