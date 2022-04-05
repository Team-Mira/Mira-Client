import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LoginButton from '../Buttons/LoginButton'
import AddBotButton from '../Buttons/AddBotButton'
import Box from '@mui/material/Box'

export default function LoginCard(){
  return(
    <Card>
      <CardHeader title='Welcome!' titleTypographyProps={{align: 'center'}} />
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <LoginButton />
          <AddBotButton />
        </Box>
      </CardContent>
    </Card>
  )
}
