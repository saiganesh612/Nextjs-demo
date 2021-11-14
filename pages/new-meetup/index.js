import { useRouter } from "next/router"
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

    return <NewMeetupForm onAddMeetup={newMeetupHandler} />
}

export default NewMeetupPage
