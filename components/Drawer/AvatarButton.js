import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'

export default function AvatarButton(props) {
    const router = useRouter()
    const { data: session } = useSession()

    const handleNav = () => {
      if(session){
        router.push('/users/' + session.user.id)
      }
      router.push('/')
    }
    return (<IconButton onClick={handleNav}>
        <Avatar alt="discord_avatar" src={session?.user.image} sx={{ p: 0 }}/>
        </IconButton>)
}

