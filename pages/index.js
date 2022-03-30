import LoginButton from "../components/Buttons/LoginButton";
import SignoutButton from "../components/Buttons/SignoutButton";
import AddBotButton from "../components/Buttons/AddBotButton"

import { useSession } from 'next-auth/react'


export default function Home() {
  const { data: session } = useSession()

  if(!session){
    return (
      <div>
        <h1>Hello</h1>
        <LoginButton />
        <AddBotButton />
      </div>
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
