import { Button } from "@mui/material";
import { signOut } from 'next-auth/react'

export default function SignoutButton(){

  return(
    <Button variant="outlined" size="large" onClick={() => signOut()}>
      Sign Out
    </Button>
  )
}
