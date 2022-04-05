import SignoutButton from "../components/Buttons/SignoutButton";
import AddBotButton from "../components/Buttons/AddBotButton"
import LoginCard from "../components/Cards/LoginCard";
import Grid from "@mui/material/Grid";

import { useSession } from 'next-auth/react'


export default function Home() {
  const { data: session, status } = useSession()

  if(status === 'loading'){
    return <h4>Loading...</h4>
  }

  if(!session){
    return (
      <Grid container spacing={0} direction='column' alignItems='center'
      justifyContent='center' style={{minHeight: '80vh'}}>
        <Grid item xs={3}>
          <LoginCard />
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      <h1>Logged in</h1>
      <SignoutButton />
      <AddBotButton />
    </div>
  );
}
