import { Grid } from "@mui/material";
// import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from "../src/components/dashboard/SalseOverview";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import UserInfo from "../src/components/dashboard/UserInfo";
import FullLayout from "../src/layouts/FullLayout";

export default function Index() {
  return (
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <UserInfo />
      </Grid>
      <Grid item xs={12} lg={12}>
        {/* <BlogCard /> */}
      </Grid>
    </Grid>
    </FullLayout>
  );
}
