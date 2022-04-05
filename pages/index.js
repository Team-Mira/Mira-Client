import LoginCard from "../components/Cards/LoginCard";
import Grid from "@mui/material/Grid";
import LoadingCard from "../components/Cards/LoadingCard";
import { useRouter } from "next/router";

import { useSession } from 'next-auth/react'


export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if(status === 'loading'){
    return <LoadingCard />
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

  if(session){
    router.push(`/users/${session.user.id}`)
    return <LoadingCard />
  }
}
