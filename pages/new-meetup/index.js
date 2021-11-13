import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const newMeetupHandler = (data) => {
        console.log(data)
    }

    return <NewMeetupForm onAddMeetup={newMeetupHandler} />
}

export default NewMeetupPage
