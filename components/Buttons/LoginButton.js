import { Button } from "@mui/material";
import { signIn } from 'next-auth/react'

export default function LoginButton(){

  return(
    <Button variant="outlined" size="large" onClick={() => signIn("discord")}>
      Login With Discord
    </Button>
  )
}
