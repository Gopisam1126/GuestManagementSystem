import "../componentStyles/common.css";
import "../componentStyles/availability.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from "react";
function CheckAvailability() {
    
    const dateObj = new Date();
    const monthName = dateObj.toLocaleString('default', { month: 'long' });
    const date = dateObj.getDate();

    const [toggleArrCal, setToggleArrCal] = useState(false);
    const [toggleDepCal, setToggleDepCal] = useState(false)

    function openArrCalendar() {
        setToggleArrCal(!toggleArrCal);
    }

    function openDepCalendar() {
        setToggleDepCal(!toggleDepCal);
    }
    
    return <>
        <section className="availability-sec">
            <h4 className="chck-avail-head">
                CHECK AVAILABILITY
            </h4>
            <div className="avail-inputs">
                <div className="arrival">
                    <div className="label-for-arrival">
                        <p className="arrival-date">
                            ARRIVAL DATE
                        </p>
                    </div>
                    <div className={`${toggleArrCal ? 'open-arr' : ''} calendar-container`}>
                        {/* under development */}
                    </div>
                    <div className="arrival-i">
                        <p className="placeholder-arr">
                            {monthName}
                            <span className="span-date">
                                {date}
                            </span>
                        </p>
                        <div className="cal-icon" onClick={openArrCalendar}>
                            <CalendarMonthIcon style={{
                                cursor: "pointer",
                                color: "#AFA278",
                                marginLeft: "2vw"
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="departure">
                    <div className="label-for-dep">
                        <p className="departure-date">
                            DEPARTURE DATE
                        </p>
                    </div>
                    <div className={`${toggleDepCal ? 'open-dep' : ''} calendar-container`}>
                        {/* under development */}
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vel!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolorem consequuntur, error maxime eaque optio temporibus praesentium quae doloremque voluptatibus!
                        </p> */}
                    </div>
                    <div className="departure-i">
                        <p className="ph-departure">
                            {monthName}
                            <span className="span-date">
                                {date}
                            </span>
                        </p>
                        <div className="cal-icon" onClick={openDepCalendar}>
                            <CalendarMonthIcon style={{
                                cursor: "pointer",
                                color: "#AFA278",
                                marginLeft: "2vw"
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="avail-sub-btn">
                    <button className="check-avail-btn">
                        Check
                    </button>
                </div>
            </div>
        </section>
    </>
}

export default CheckAvailability;