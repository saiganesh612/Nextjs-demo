import { MongoClient } from 'mongodb'
import Head from "next/head"
import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Next Meetups</title>
                <meta name="description" content="This is for Next developers meetup." />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

// This function will run one each and every request
// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res

//     // Fetch data from API
//     // Securely connect with DataBase

//     return {
//         props: {
//             meetups: dummyData
//         }
//     }
// }

// This function will run only in Build process
export async function getStaticProps() {
    // Fetch data from API
    // Securely connect with DataBase

    const client = await MongoClient.connect('mongodb+srv://Nextjs:BJZgA6YSettS6xE7@cluster0.awmux.mongodb.net/NextjsDemo?retryWrites=true&w=majority')
    const db = client.db()

    const MeetupsCollection = db.collection('meetups')
    const meetups = await MeetupsCollection.find().toArray()
    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 60  //Updates content for every 1min on server side 
    }
}

export default HomePage
