import { useParams } from "react-router-dom";
import Rooms from "../constants/constants";
import "../pageStyles/roomDetails.css";
function RoomDetails() {

    const { id } = useParams();
    const room = Rooms.find((room) => room.id === parseInt(id));

    if (!room) {
        console.log("Room not Found");
    }

    return <>
        <section className="room-detail-section">
            <img src={room.imgUrl} alt={room.name} className="room-detail-thumbnail" />
            <h2 className="room-detail-name">{room.name}</h2>
            <p className="room-detail-type">{room.type}</p>
            <p className="room-detail-price">{room.price} <span> / Night</span></p>
            <p className="room-detail-description">Detailed description of the room goes here...</p>
        </section>
    </>
}

export default RoomDetails;