import { Grid } from "@mui/material";
// import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from "../src/components/dashboard/SalseOverview";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import BannerBar from "../src/components/dashboard/BannerBar";
import FullLayout from "../src/layouts/FullLayout";

export default function Index() {
  return (
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BannerBar />
      </Grid>
    </Grid>
    </FullLayout>
  );
}
