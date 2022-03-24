import Box from "@mui/material/Box"
import DrawerNav from "./DrawerNav"

export default function Layout({children}) {
    return (
        <Box sx={{ display: 'flex' }}>
            <DrawerNav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}
