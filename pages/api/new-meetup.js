// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb"

const newMeetUp = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body
        console.log(data)

        const client = await MongoClient.connect('mongodb+srv://Nextjs:BJZgA6YSettS6xE7@cluster0.awmux.mongodb.net/NextjsDemo?retryWrites=true&w=majority')
        const db = client.db()

        const MeetupsCollection = db.collection('meetups')
        const result = await MeetupsCollection.insertOne(data)

        console.log(result)
        client.close()

        res.status(201).json({ message: 'Meetup inserted Successfully!' })
    }
}

export default newMeetUp
