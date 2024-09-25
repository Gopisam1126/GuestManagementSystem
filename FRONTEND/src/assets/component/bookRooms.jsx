import { Link } from "react-router-dom";
import "../componentStyles/bookRooms.css";
import { useEffect, useState } from "react";
import axios from "axios";

function BookRooms() {
    // Properly define the type of room as an array of objects (for TypeScript)
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function getRoomDet() {
            try {
                const rdRes = await axios.get("http://localhost:3000/roomdetails");
                setRooms(rdRes.data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        getRoomDet();
    }, []);

    return (
        <section className="rb-section">
            <h4 className="rb-main-head">ROOMS RESERVATION</h4>
            <div className="rooms-list-container">
                {/* Conditional rendering if no rooms are found */}
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <div className="room-list" key={room.id}>
                            <Link to={`/rooms/${room.id}`} style={{ textDecoration: "none" }}>
                                <img
                                    src={`data:${room.mimeType};base64,${room.file}`}
                                    alt="room-Thumbnail"
                                    className="room-thumbnail"
                                />
                                <p className="room-name">{room.roomname}</p>
                                <p className="room-type">{room.staytype}</p>
                                <p className="room-price">
                                    ${room.roomprice} <span> / Night</span>
                                </p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No rooms available at the moment.</p>
                )}
            </div>
        </section>
    );
}

export default BookRooms;
