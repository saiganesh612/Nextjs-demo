import { useRouter } from "next/router"
import Head from "next/head"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const router = useRouter()

    const newMeetupHandler = async (data) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
        router.push("/")
    }

    return (
        <>
            <Head>
                <title>Add new meetup</title>
                <meta name="description" content="You can add new meetups here." />
            </Head>
            <NewMeetupForm onAddMeetup={newMeetupHandler} />
        </>
    )
}

export default NewMeetupPage
