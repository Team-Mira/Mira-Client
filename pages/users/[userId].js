import React from 'react'
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
const ADDRESS = process.env.API_URL || 'http://localhost:8080/api/'

export default function User (props) {
  const { data: session, status } = useSession()
  const router = useRouter()

  if(status === 'loading'){
    return <h4>Loading</h4>
  }

  const { name, id } = session.user

  
  if(router.query.userId!== id){
    return <h4>You can not access this page</h4>
  }

  return (<h1>Hello, {name}!</h1>)
}

export async function getStaticPaths() {
  const res = await fetch( `${ADDRESS}users/ids`)
  const ids = await res.json()

  return {
    paths:ids.map(userId => ({params: {userId}})),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { userId } = context.params

  const res = await fetch(`${ADDRESS}report/user/${userId}`)
  if( res.status !== 200 ){
    return {
      notFound: true,
      revalidate: 600
    }
  } else {
    const user = await res.json()
    return {
      props: {user, failed: false},
      revalidate: 600
    }
  }
}
