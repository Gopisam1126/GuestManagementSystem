import { useState } from "react";
import Header2 from "../component/header2";
import EventList from "../component/eventList";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import Footer from "../component/footer";
import "../pageStyles/events.css";
function Events() {

    const d = new Date();
    const year = d.getFullYear();
    const monthName = d.toLocaleString('default', { month: 'long' });

    const [change, setChange] = useState(false)
    
    function changeNav() {
        setChange(true)
    }

    return <>
        <section className="events-section" onScroll={changeNav}>
            <div className={`${change ? 'change' : ''} events-header`}>
                <Header2/>
            </div>
            <div className="events-body-sontainer">
                <div className="search-container">
                    <SearchIcon style={{
                        color: "#AFA278",
                        position: "relative",
                        left: "3vw",
                        fontSize: "2rem"
                    }}/>
                    <input type="text" className="searchbox" placeholder="SEARCH FOR EVENTS" />
                    <input type="submit" value="FIND EVENTS" className="find-events-btn" />
                </div>
                <div className="current-month">
                    <p className="c-month">
                        {monthName}
                        <span className='c-yr'>{year}</span>
                        <span className='month-arr-icon'>
                            <KeyboardArrowDownIcon style={{
                                position: 'relative',
                                top: "0.2rem",
                                left: "0.2rem"
                            }}/>
                        </span>
                    </p>
                </div>
                <div className="upcomming-events-c">
                    <EventBusyIcon style={{
                        marginRight: "0.4rem"
                    }}/>
                    <p className="upcmng-e-msg">
                        There are no Upcomming Events
                    </p>
                </div>
                <div className="event-list-container">
                    <EventList/>
                </div>
            </div>
        </section>
        <section className="events-footer">
            <Footer/>
        </section>
    </>
}

export default Events;