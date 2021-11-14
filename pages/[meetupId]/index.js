import { MongoClient, ObjectId } from "mongodb"
import MeetupDetail from "../../components/meetups/MeetupDetail"

function DetailsPage(props) {
    return <>
        <MeetupDetail
            image={props.meetUpData.image}
            title={props.meetUpData.title}
            address={props.meetUpData.address}
            description={props.meetUpData.description}
        />
    </>
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://Nextjs:BJZgA6YSettS6xE7@cluster0.awmux.mongodb.net/NextjsDemo?retryWrites=true&w=majority')
    const db = client.db()

    const MeetupsCollection = db.collection('meetups')
    const meetups = await MeetupsCollection.find({}, { _id: 1 }).toArray()
    client.close()

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const MeetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://Nextjs:BJZgA6YSettS6xE7@cluster0.awmux.mongodb.net/NextjsDemo?retryWrites=true&w=majority')
    const db = client.db()

    const MeetupsCollection = db.collection('meetups')
    const meetup = await MeetupsCollection.findOne({ _id: ObjectId(MeetupId) })
    client.close()

    return {
        props: {
            meetUpData: {
                id: meetup._id.toString(),
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description
            }
        }
    }
}

export default DetailsPage
