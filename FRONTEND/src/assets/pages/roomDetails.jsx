import { useParams } from "react-router-dom";
import Rooms from "../constants/constants";
import Header2 from "../component/header2";
import "../pageStyles/roomDetails.css";
import Amenities from "../component/amenities";
function RoomDetails() {

    const { id } = useParams();
    const room = Rooms.find((room) => room.id === parseInt(id));

    if (!room) {
        console.log("Room not Found");
    }

    return <>
        <section className="room-detail-section">
            <div className="room-details-header">
                <Header2/>
            </div>
            <div className="room-det-body-container">
                <div className="left-details">
                    <img src={room.imgUrl} alt={room.name} className="room-detail-thumbnail" />
                    <h4 className="room-detail-name">{room.name}</h4>
                    <p className="room-detail-type">{room.type}</p>
                    <p className="room-detail-price">{room.price}<span> / Night</span></p>
                    {/* <p className="room-detail-description">Detailed description of the room goes here...</p> */}
                </div>
                <div className="right-aminities">
                    <Amenities/>
                </div>
            </div>
        </section>
    </>
}

export default RoomDetails;