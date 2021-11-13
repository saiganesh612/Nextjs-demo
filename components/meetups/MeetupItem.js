import { useRouter } from "next/router"
import Image from "next/image"
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    const router = useRouter()

    const clickHandler = () => {
        router.push(`/${props.id}`)
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <Image src={props.image} alt={props.title} width="700" height="600" />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={clickHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
