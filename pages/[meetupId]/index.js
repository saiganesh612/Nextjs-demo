import MeetupDetail from "../../components/meetups/MeetupDetail"

function DetailsPage(props) {
    return <>
        <MeetupDetail
            image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            title="The First Meetup"
            address="Some Address"
            description="Meetup description"
        />
    </>
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const MeetupId = context.params.meetupId
    console.log(MeetupId)

    return {
        props: {
            meetUpData: {
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
                title: "The First Meetup",
                address: "Some Address",
                description: "Meetup description"
            }
        }
    }
}

export default DetailsPage
