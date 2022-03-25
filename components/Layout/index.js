import Box from "@mui/material/Box"
import NavDrawer from "../drawer"

export default function Layout(props){
  const { children } = props

  return(
    <Box sx={{ display: 'flex' }}>
      <NavDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}
