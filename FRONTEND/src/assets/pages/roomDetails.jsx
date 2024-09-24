/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Rooms from "../constants/constants";
import Header2 from "../component/header2";
import "../pageStyles/roomDetails.css";
import Amenities from "../component/amenities";
import { useState } from "react";
function RoomDetails() {

    const [isAvailable, setIsAvailable] = useState(true)

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
                    <div className="r-b-flex-c">
                        <div>
                            <div className="room-name-type">
                                <h4 className="room-detail-name">{room.name}</h4>
                                <p className="room-detail-type">{room.type}</p>
                            </div>
                            <div className="r-price-stat">
                                <p className="room-detail-price"><span className="rd-price">{room.price}</span><span className="rd-per-n"> / Night</span></p>
                                <div className="avail-status">
                                    <p className={`${isAvailable ? 'green' : 'red'} room-stat`}>
                                        {
                                            isAvailable ? <p>Available</p> : <p>Not Available</p>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="book-button">
                            <button className="bk-btn">Book Room</button>
                        </div>
                    </div>
                </div>
                <div className="right-aminities">
                    <Amenities/>
                </div>
            </div>
        </section>
    </>
}

export default RoomDetails;