import { Grid } from "@mui/material";
import UserInfo from "../src/components/dashboard/UserInfo";
import VitalSigns from "../src/components/dashboard/VitalSigns"
import InspectionInfo from "../src/components/dashboard/InspectionInfo"

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <UserInfo />
        <VitalSigns />
        <InspectionInfo />

      </Grid>
    </Grid>
  );
};

export default Tables;
