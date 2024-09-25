/* eslint-disable no-unused-vars */
// import Rooms from "../constants/constants";
import Header2 from "../component/header2";
import "../pageStyles/roomDetails.css";
import Amenities from "../component/amenities";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function RoomDetails() {

    const { id } = useParams();
    const [isAvailable, setIsAvailable] = useState(true)
    const [room, setRoom] = useState([]);

    // if (!room) {
    //     console.log("Room not Found");
    // }

    useEffect(() => {
        console.log("Room ID:", id); 
        
        async function getRoomDet() {
            try {
                const rdRes = await axios.get(`http://localhost:3000/room/view/${id}`);
                console.log(rdRes);
                
                setRoom(rdRes.data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        getRoomDet();
    }, [id]);
    return <>
        <section className="room-detail-section">
            <div className="room-details-header">
                <Header2/>
            </div>
            <div className="room-det-body-container">
                {
                    room.map((room) => (
                        
                        <div className="left-details" key={room.id}>
                            <img src={room.roomimg} alt={room.roomname} className="room-detail-thumbnail" />
                            <div className="r-b-flex-c">
                                <div>
                                    <div className="room-name-type">
                                        <h4 className="room-detail-name">{room.roomname}</h4>
                                        <p className="room-detail-type">{room.staytype}</p>
                                    </div>
                                    <div className="r-price-stat">
                                        <p className="room-detail-price"><span className="rd-price">{room.roomprice}</span><span className="rd-per-n"> / Night</span></p>
                                        <div className="avail-status">
                                            <div className={`${isAvailable ? 'green' : 'red'} room-stat`}>
                                                {
                                                    isAvailable ? <p>Available</p> : <p>Not Available</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="book-button">
                                    <button className="bk-btn">Book Room</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="right-aminities">
                    <Amenities/>
                </div>
            </div>
        </section>
    </>
}

export default RoomDetails;