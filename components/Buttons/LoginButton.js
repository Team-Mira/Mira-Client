import { Button } from "@mui/material";
import { signIn } from 'next-auth/react'

export default function LoginButton(){
  const handleLogin = () => {
    signIn("discord")
  }

  return(
    <Button variant="contained" size="large" onClick={handleLogin}>
      Login With Discord
    </Button>
  )
}
