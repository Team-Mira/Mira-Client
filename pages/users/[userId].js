import React from 'react'
import Layout from '../../components/Layout'
const ADDRESS = process.env.API_URL || 'http://localhost:8080/api/'

export default function user ({user}) {
  const { name } = user

  return (<h1>Hello, {name}!</h1>)
}

export async function getStaticPaths() {
  const res = await fetch( `${ADDRESS}users/`)
  const ids = await res.json()

  return {
    paths:ids.map(userId => ({params: {userId}})),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { userId } = context.params

  const res = await fetch(`${ADDRESS}report/user/${userId}`)
  const user = await res.json()

  return {
    props: {user},
  }
}
