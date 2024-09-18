import Header2 from "../component/header2";
import Availability from "../component/availability";
import BookRooms from "../component/bookRooms";
import "../pageStyles/booking.css";
function Booking() {
    return <>
        <section className="booking-section">
            <div className="booking-header">
                <Header2/>
            </div>
            <div className="booking-body-container">
                <div className="avilability-container">
                    <Availability/>
                </div>
                <div className="book-rooms-sec">
                    <BookRooms/>
                </div>
            </div>
        </section>
    </>
}

export default Booking;