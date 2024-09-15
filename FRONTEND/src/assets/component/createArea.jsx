import CheckAvailability from "./availability";
import "../componentStyles/CreateArea.css"

function CreateArea() {
    return <>
        <section className="ca-section">
            <div className="ca-container">
                <div className="availability-container">
                    <CheckAvailability/>
                </div>
                <div className="facilities-container">
                    <h3 className="hf-head">
                        Hotel Facilities
                    </h3>
                </div>
            </div>
        </section>
    </>
}

export default CreateArea;