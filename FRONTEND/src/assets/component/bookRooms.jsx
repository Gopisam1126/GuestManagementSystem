import "../componentStyles/bookRooms.css";
import Rooms from "../constants/constants";
function BookRooms() {
    return <>
        <section className="rb-section">
            <h4 className="rb-main-head">
                ROOMS RESERVATION
            </h4>
            <div className="rooms-list-container">
                {
                    Rooms.map((room) => (
                        <div className="room-list" key={room.id}>
                            <img src={room.imgUrl} alt="room-Thumbnail" className="room-thumbnail" />
                            <p className="room-name">{room.name}</p>
                            <p className="room-type">{room.type}</p>
                            <p className="room-price">{room.price} <span> / Night</span></p>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
}

export default BookRooms;