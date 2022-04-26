import { Grid } from "@mui/material";
import UserInfo from "../src/components/dashboard/UserInfo";
import VitalSigns from "../src/components/dashboard/VitalSigns"
import InspectionInfo from "../src/components/dashboard/InspectionInfo"
import FullLayout from "../src/layouts/FullLayout";

const News = () => {
    return (
        <FullLayout>
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <UserInfo />
                <VitalSigns />
                <InspectionInfo />

            </Grid>
        </Grid>
        </FullLayout>
    );
};

export default News;
