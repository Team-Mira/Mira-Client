import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function AddBotButton(){
  const router = useRouter()

  const handleNav = () => {
    router.push('/addBot')
  }

  return(
    <Button variant="contained" size="large" onClick={handleNav}>
      Add Bot
    </Button>
  )
}
