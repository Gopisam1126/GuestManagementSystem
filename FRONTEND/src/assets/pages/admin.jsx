import Header2 from "../component/header2";
import "../pageStyles/admin.css";
function Admin() {
    return <>
        <section className="admin-section">
            <div className="admin-header">
                <Header2/>
            </div>
            <div className="admin-body-container">
                <div className="admin-guest-lists">
                    <h4 className="Guests">
                        Guests
                    </h4>
                    <div className="guest-list-container">
                    </div>
                </div>
                <div className="add-item-container">
                    <div className="add-rooms">
                        <h4 className="add-room-head">
                            Add Room Details
                        </h4>
                        <form action="/addroom">
                            <label htmlFor="roomImg">Room Image : </label>
                            <input type="file" name="roomImg" id="room-img" className="ad-room-img" /> <br />
                            <input type="text" placeholder="Add Room Name" className="ad-room-name" name="roomname" /><br />
                            <input type="text" placeholder="Add Type" className="type-stay" name="staytype" /><br />
                            <input type="text" placeholder="Add Price" className="ad-room-price" name="roomprice" /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="add-amenities-container">
                        <h4 className="add-amenities">
                            Add Amenities
                        </h4>
                        <form action="/addaminities">
                            <label htmlFor="size">Size</label>
                            <input type="text" /><br />
                            <label htmlFor="entertainment">Entertainment</label>
                            <input type="text" /><br />
                            <label htmlFor="connectivity">Connectivity</label>
                            <input type="text" /><br />
                            <label htmlFor="butler">Butler Service</label>
                            <input type="text" /><br />
                            <label htmlFor="guests">Guests</label>
                            <input type="text" /><br />
                            <label htmlFor="location">Location</label>
                            <input type="text" /><br />
                            <label htmlFor="occupancy">Occupancy</label>
                            <input type="text" /><br />
                            <label htmlFor="refreshment">Refreshment</label>
                            <input type="text" /><br />
                            <label htmlFor="extras">Extras</label>
                            <input type="text" /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="add-events-container">
                        <h4 className="ad-events-head">
                            Add Events
                        </h4>
                        <form action="/addevents">
                            <input type="text" placeholder="Event Name / Type" /><br />
                            <label htmlFor="event-date">Event Date : </label>
                            <input type="date" name="event-date" id="event-date" /><br />
                            <div className="event-duration">
                                <p className="duration">Duration : </p>
                                <label htmlFor="event-duration-from">From</label>
                                <input type="time" name="event-duration-from" id="e-d-f" /><br />
                                <label htmlFor="event-duration-to">To : </label>
                                <input type="time" name="event-duration-to" id="e-d-t" />
                            </div>
                            <textarea name="event-desc" id="ad-event-desc" className="ad-event-desc" placeholder="Event Description"></textarea><br />
                            <label htmlFor="event-img">Event Image : </label>
                            <input type="file" name="event-img" id="ad-event-img" />
                            <input type="submit" value="Submit" className="submit-e-det" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Admin;