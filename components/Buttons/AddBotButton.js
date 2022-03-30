import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function AddBotButton(){
  const router = useRouter()

  const handleNav = () => {
    router.push('/addBot')
  }

  return(
    <Button variant="outlined" size="large" onClick={handleNav}>
      Add Bot
    </Button>
  )
}
