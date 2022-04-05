import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

export default function LoadingCard(){
  return(
    <Grid container spacing={0} direction='column' alignItems='center'
    justifyContent='center' style={{minHeight: '80vh'}}>
      <Grid item xs={3}>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <CircularProgress />
        </Box>
      </Grid>
    </Grid>
  )
}
