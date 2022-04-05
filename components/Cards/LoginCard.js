import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LoginButton from '../Buttons/LoginButton'
import AddBotButton from '../Buttons/AddBotButton'
import GuestButton from '../Buttons/GuestButton'
import Box from '@mui/material/Box'

export default function LoginCard(){
  return(
    <Card>
      <CardHeader title='Welcome!' titleTypographyProps={{align: 'center'}} />
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <LoginButton />
          <AddBotButton />
        </Box>
      </CardContent>
    </Card>
  )
}
