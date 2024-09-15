import CheckAvailability from "./availability";
import News from "./news";
import "../componentStyles/common.css";
import "../componentStyles/CreateArea.css";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import KingBedIcon from '@mui/icons-material/KingBed';

function CreateArea() {
    return <>
        <section className="ca-section">
            <div className="ca-container">
                <div className="availability-container">
                    <CheckAvailability/>
                </div>
                <div className="facilities-container">
                    <h3 className="hf-head">
                        HOTEL FACILITIES
                    </h3>
                    <div className="facilities">
                        <div className="fa-1 fa">
                            <div className="head-icon">
                                <RestaurantIcon style={{
                                    fontSize: "3rem",
                                    color: "#AFA278"
                                }}/>
                                <h4 className="fa-1-head fa-i-head">
                                    Restraunt
                                </h4>
                            </div>
                            <p className="fa-1-det fa-det">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam inventore est ipsam ratione exercitationem recusandae deleniti animi, alias amet nihil impedit quibusdam earum tempora natus dicta similique soluta.
                            </p>
                        </div>
                        <div className="fa-2 fa">
                            <div className="head-icon">
                                <NightlifeIcon style={{
                                    fontSize: "3rem",
                                    color: "#AFA278"
                                }}/>
                                <h4 className="fa-2-head fa-i-head">
                                    Silk Bar
                                </h4>
                            </div>
                            <p className="fa-2-det fa-det">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam inventore est ipsam ratione exercitationem recusandae deleniti animi, alias amet nihil impedit quibusdam earum tempora natus dicta similique soluta.
                            </p>
                        </div>
                        <div className="fa-3 fa">
                            <div className="head-icon">
                                <KingBedIcon style={{
                                    fontSize: "3rem",
                                    color: "#AFA278"
                                }}/>
                                <h4 className="fa-3-head fa-i-head">
                                    Luxury Rooms
                                </h4>
                            </div>
                            <p className="fa-3-det fa-det">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam inventore est ipsam ratione exercitationem recusandae deleniti animi, alias amet nihil impedit quibusdam earum tempora natus dicta similique soluta.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="news-component">
                    <News/>
                </div>
            </div>
        </section>
    </>
}

export default CreateArea;