import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Home()  {
    const {user } = useUser()
    
    
    return (
        <div>
            <h1>Hello {user ? user.name : 'Guest'}</h1>
        </div>
    )
}
// export const getServerSideProps = withPageAuthRequired();

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    const token = getAccessToken(req, res)
    console.log('token :>> ', token);
    return {
        props: {}
    }
}