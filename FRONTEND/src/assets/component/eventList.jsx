import "../componentStyles/eventList.css";
function EventList() {
    return <>
        <section className="events-list-sec">
            <h4 className="past-events">
                LATEST PAST EVENTS
            </h4>
            <div className="ev-lists">
                <div className="event-date-cal">
                    <div className="event-month">
                        <p className="month">
                            May
                        </p>
                    </div>
                    <div className="event-date">
                        <p className="date">
                            10
                        </p>
                    </div>
                </div>
                <div className="event-det">
                    <p className="time">
                        7:00 pm - 11:00 pm
                    </p>
                    <p className="name">
                        MUSIC CONCERT
                    </p>
                    <p className="details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam provident maxime quia magnam soluta quam debitis quis saepe qui?
                    </p>
                </div>
            </div>
        </section>        
    </>
}

export default EventList;