import { getAccessToken, getSession, useUser } from "@auth0/nextjs-auth0"
import { json } from "stream/consumers"
import {GetServerSideProps} from "next"

export default function Home() {
  const {user} = useUser()
  return null
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = getSession(req, res)

  if(!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }
}