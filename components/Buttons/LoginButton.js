import { Button } from "@mui/material";
import { signIn } from 'next-auth/react'

export default function LoginButton(){
  const handleLogin = () => {
    signIn("discord")
  }

  return(
    <Button variant="outlined" size="large" onClick={handleLogin}>
      Login With Discord
    </Button>
  )
}
