/* eslint-disable no-unused-vars */
import Header2 from "../component/header2";
import "../pageStyles/roomDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../component/loader";

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
        return <>
            <Loader/>
        </> // Handle loading state
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
                                            <td className="room-detail-name">Size:</td>
                                            <td className="room-detail-type">{features.size}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Entertainment:</td>
                                            <td className="room-detail-type">{features.entertainment}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Connectivity:</td>
                                            <td className="room-detail-type">{features.connectivity}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Butler Service:</td>
                                            <td className="room-detail-type">{features.btlr_service}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Guests:</td>
                                            <td className="room-detail-type">{features.guests}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Location:</td>
                                            <td className="room-detail-type">{features.location_r}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Occupancy:</td>
                                            <td className="room-detail-type">{features.occupancy}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Refreshment:</td>
                                            <td className="room-detail-type">{features.refreshment}</td>
                                        </tr>
                                        <tr>
                                            <td className="room-detail-name">Extras:</td>
                                            <td className="room-detail-type">{features.extras}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <p className="r-d-loader" style={{
                                    textAlign: "center",
                                    paddingTop: "50%",
                                    fontSize: "1.8rem",
                                    fontWeight: 600
                                }}>Loading features...</p>
                            )}
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RoomDetails;
