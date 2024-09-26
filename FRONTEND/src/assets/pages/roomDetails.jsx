/* eslint-disable no-unused-vars */
import Header2 from "../component/header2";
import "../pageStyles/roomDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RoomDetails() {
    const { id } = useParams();
    const [isAvailable, setIsAvailable] = useState(true);
    const [room, setRoom] = useState({});
    const [features, setFeatures] = useState({});

    useEffect(() => {
        // console.log("Room ID:", id); 
        
        async function getRoomDet() {
            try {
                const rdRes = await axios.get(`http://localhost:3000/room/view/${id}`);
                // console.log(rdRes.data);
                setRoom(rdRes.data);
                // Set the features directly from the room data
                const { size, entertainment, connectivity, btlr_service, guests, location_r, occupancy, refreshment, extras } = rdRes.data;
                setFeatures({ size, entertainment, connectivity, btlr_service, guests, location_r, occupancy, refreshment, extras });
            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        getRoomDet();
    }, [id]);

    if (!room.roomname) {
        return <p>Loading room details...</p>; // Handle loading state
    }

    return (
        <>
            <section className="room-detail-section">
                <div className="room-details-header">
                    <Header2 />
                </div>
                <div className="room-det-body-container">
                    <div className="left-details">
                        <img 
                            src={`data:${room.mimeType};base64,${room.file}`} 
                            alt={room.roomname} 
                            className="room-detail-thumbnail" 
                        />
                        <div className="r-b-flex-c">
                            <div>
                                <div className="room-name-type">
                                    <h4 className="room-detail-name">{room.roomname}</h4>
                                    <p className="room-detail-type">{room.staytype}</p>
                                </div>
                                <div className="r-price-stat">
                                    <p className="room-detail-price">
                                        <span className="rd-price">{room.roomprice}</span>
                                        <span className="rd-per-n"> / Night</span>
                                    </p>
                                    <div className="avail-status">
                                        <div className={`${isAvailable ? 'green' : 'red'} room-stat`}>
                                            {isAvailable ? <p>Available</p> : <p>Not Available</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="book-button">
                                <button className="bk-btn">Book Room</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-aminities">
                        <section className="amenities-section">
                            <h4 className="amenities-head">Amenities</h4>
                            {features.size ? (  // Check if features are loaded
                                <table className="amenities-table">
                                    <tbody className="t-body">
                                        <tr>
                                            <td className="detail-feature">Size:</td>
                                            <td className="detail-value">{features.size}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Entertainment:</td>
                                            <td className="detail-value">{features.entertainment}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Connectivity:</td>
                                            <td className="detail-value">{features.connectivity}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Butler Service:</td>
                                            <td className="detail-value">{features.btlr_service}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Guests:</td>
                                            <td className="detail-value">{features.guests}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Location:</td>
                                            <td className="detail-value">{features.location_r}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Occupancy:</td>
                                            <td className="detail-value">{features.occupancy}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Refreshment:</td>
                                            <td className="detail-value">{features.refreshment}</td>
                                        </tr>
                                        <tr>
                                            <td className="detail-feature">Extras:</td>
                                            <td className="detail-value">{features.extras}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <p>Loading features...</p>
                            )}
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RoomDetails;
