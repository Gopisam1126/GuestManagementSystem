/* eslint-disable no-unused-vars */
import Header2 from "../component/header2";
import axios from "axios";
import "../pageStyles/admin.css";
import { useEffect, useState } from "react";

function Admin() {
    const [formData, setFormData] = useState({
        roomname: "",
        staytype: "",
        roomprice: ""
    });
    const [roomImg, setRoomImg] = useState(null);
    const [uploaded, setUploaded] = useState(null);
    const [rooms, setRooms] = useState([]);

    const [featureData, setFeatureData] = useState({
        size: "",
        Entertainment: "",
        connectivity: "",
        butlerserv: "",
        guest: "",
        loc: "",
        occupancy: "",
        refreshment: "",
        extras: "",
    });
    const [features, setFeatures] = useState([]);

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

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleFeatureIC(e) {
        setFeatureData({...featureData, [e.target.name]: e.target.value});
    }

    function handleFileChange(e) {
        setRoomImg(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('roomImg', roomImg);
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post("http://localhost:3000/addroom", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploaded(true);
            console.log("Room Details Uploaded", response.data);
            // Refresh room list after upload
            setRooms(prevRooms => [...prevRooms, response.data]);
        } catch (err) {
            console.log(err);
            setUploaded(false);
        }
    }

    async function handleFeatureUpload(e) {
        e.preventDefault();

        if (!featureData.ad_r_size || !featureData.ad_r_E || !featureData.ad_r_C || !featureData.ad_r_BS || 
            !featureData.ad_r_G || !featureData.ad_r_L || !featureData.ad_r_O || !featureData.ad_r_R || !featureData.ad_r_Extras) {
            alert("All fields are required!");
            return;
        }

        const fData = new FormData();
        Object.keys(featureData).forEach((key) => {
            fData.append(key, featureData[key]);
        })

        try {
            const fDatares = await axios.post("http://localhost:3000/addrf", fData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setFeatures(prevFeature => [...prevFeature, fDatares.data]);
            console.log("Data Uploaded", fDatares.data);
        } catch (error) {
            console.log("Error Uploading Data",error);
        }
    }

    return (
        <>
            <section className="admin-section">
                <div className="admin-header">
                    <Header2 />
                </div>
                <div className="admin-body-container">
                    <div className="admin-guest-lists">
                        <h4 className="Guests">Guests</h4>
                        <div className="guest-list-container"></div>
                    </div>
                    <div className="admin-room-lists">
                        <h4 className="ad-room-head">Rooms List</h4>
                        <ul>
                            {rooms.map((room) => (
                                <li key={room.room_id} className="room-item-list">
                                    <div className="image-container">
                                        <img src={`data:${room.mimeType};base64,${room.file}`} alt="Room" className="ad-room-img" />
                                    </div>
                                    <div className="desc-container">
                                        <p className="ad-room-name">{room.roomname}</p>
                                        <p className="ad-stay-type">{room.staytype}</p>
                                        <p className="ad-room-price">${room.roomprice}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="add-item-container">
                        <div className="add-rooms">
                            <h4 className="add-room-head">Add Room Details</h4>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="roomImg">Room Image: </label>
                                <input type="file" name="roomImg" id="room-img" className="ad-room-img-i" accept="image/*" onChange={handleFileChange} /><br />
                                <input type="text" placeholder="Add Room Name" className="ad-room-name" name="roomname" onChange={handleInputChange} /><br />
                                <input type="text" placeholder="Add Type" className="type-stay" name="staytype" onChange={handleInputChange} /><br />
                                <input type="text" placeholder="Add Price" className="ad-room-price" name="roomprice" onChange={handleInputChange} /><br />
                                <input type="submit" value="Submit" />
                                <p>{uploaded ? "Data Uploaded" : "Error Uploading"}</p>
                            </form>
                        </div>
                        <div className="add-amenities-container">
                            <h4 className="add-amenities">Add Room Features</h4>
                            <form onSubmit={handleFeatureUpload}>
                                <label htmlFor="size">Size</label>
                                <input type="text" name="ad_r_size" className="ad-r-size" onChange={handleFeatureIC} /><br />
                                <label htmlFor="entertainment">Entertainment</label>
                                <input type="text" name="ad_r_E" className="ad-r-E" onChange={handleFeatureIC} /><br />
                                <label htmlFor="connectivity">Connectivity</label>
                                <input type="text" name="ad_r_C" className="ad-r-C" onChange={handleFeatureIC} /><br />
                                <label htmlFor="butler">Butler Service</label>
                                <input type="text" name="ad_r_BS" className="ad-r-BS" onChange={handleFeatureIC} /><br />
                                <label htmlFor="guests">Guests</label>
                                <input type="text" name="ad_r_G" className="ad-r-G" onChange={handleFeatureIC} /><br />
                                <label htmlFor="location">Location</label>
                                <input type="text" name="ad_r_L" className="ad-r-L" onChange={handleFeatureIC} /><br />
                                <label htmlFor="occupancy">Occupancy</label>
                                <input type="text" name="ad_r_O" className="ad-r-O" onChange={handleFeatureIC} /><br />
                                <label htmlFor="refreshment">Refreshment</label>
                                <input type="text" name="ad_r_R" className="ad-r-R" onChange={handleFeatureIC} /><br />
                                <label htmlFor="extras">Extras</label>
                                <input type="text" name="ad_r_Extras" className="ad-r-Extras" onChange={handleFeatureIC} /><br />
                                <input type="submit" name="f-submit" value="Submit" />
                            </form>
                        </div>
                        <div className="add-events-container">
                            <h4 className="ad-events-head">Add Events</h4>
                            <form action="/addevents">
                                <input type="text" placeholder="Event Name / Type" /><br />
                                <label htmlFor="event-date">Event Date: </label>
                                <input type="date" name="event-date" id="event-date" /><br />
                                <div className="event-duration">
                                    <p className="duration">Duration: </p>
                                    <label htmlFor="event-duration-from">From</label>
                                    <input type="time" name="event-duration-from" id="e-d-f" /><br />
                                    <label htmlFor="event-duration-to">To: </label>
                                    <input type="time" name="event-duration-to" id="e-d-t" />
                                </div>
                                <textarea name="event-desc" id="ad-event-desc" className="ad-event-desc" placeholder="Event Description"></textarea><br />
                                <label htmlFor="event-img">Event Image: </label>
                                <input type="file" name="event-img" id="ad-event-img" />
                                <input type="submit" value="Submit" className="submit-e-det" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Admin;
