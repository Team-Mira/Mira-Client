import { Container, Grid } from "@mui/material"
import DrawerNav from "./DrawerNav"

export default function Layout({children}) {
    return (
    <Grid container spacing={0}>
        <Grid item xs={0} sm={2}>
            <DrawerNav />
        </Grid>
        <Grid item xs={12} sm={10}>
            {children}
        </Grid>
    </Grid>
    )
}
