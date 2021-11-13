import MeetupList from "../components/meetups/MeetupList"

const dummyData = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        address: 'Some address',
        description: 'This is first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        address: 'Some address',
        description: 'This is second meetup'
    },
    {
        id: 'm3',
        title: 'Third meetup',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        address: 'Some address',
        description: 'This is third meetup'
    }
]

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

// This function will run only in Build process
export async function getStaticProps() {
    // Fetch data from API
    // Securely connect with DataBase

    return {
        props: {
            meetups: dummyData
        },
        revalidate: 60  //Updates content for every 1min on server side 
    }
}

export default HomePage
