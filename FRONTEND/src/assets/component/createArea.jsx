import "../componentStyles/CreateArea.css"

function CreateArea() {
    return <>
        <section className="ca-section">
            <div className="ca-container">
                <h2 className="avilability">
                    Check Availability
                </h2>
                <div className="avail-inputs">
                    <div className="arrival-c">
                        <label htmlFor="arrival">Arrival</label><br />
                        <input type="date" name="arrival" id="arrival" className="arrival" />
                    </div>
                    <div className="departure-c">
                        <label htmlFor="departure">Departue</label><br />
                        <input type="date" name="departure" id="departure" className="departure" /><br />
                    </div>
                    <div className="num-guests">
                        <label htmlFor="guests">Guests</label><br />
                        <input type="number" name="guests" id="guests" />
                    </div>
                    <input type="submit" className="avail-submit" />
                </div>
            </div>
        </section>
    </>
}

export default CreateArea;