import "../componentStyles/amenities.css"
function Amenities() {
    return <>
        <section className="amenities-section">
            <h4 className="amenities-head">
                Amenities
            </h4>
            <table className="amenities-table">
                <tr>
                    <td className="detail-label">Size</td>
                    <td className="detail-value">175 square feet</td>
                </tr>
                <tr>
                    <td className="detail-label">Entertainment</td>
                    <td className="detail-value">46 Inch LED TV</td>
                </tr>
                <tr>
                    <td className="detail-label">Connectivity</td>
                    <td className="detail-value">Free Wi-Fi</td>
                </tr>
                <tr>
                    <td className="detail-label">Butler Service</td>
                    <td className="detail-value">Not Available</td>
                </tr>
                <tr>
                    <td className="detail-label">Guests</td>
                    <td className="detail-value">Up to 7 guests</td>
                </tr>
                <tr>
                    <td className="detail-label">Location</td>
                    <td className="detail-value">Front side of hotel</td>
                </tr>
                <tr>
                    <td className="detail-label">Occupancy</td>
                    <td className="detail-value">2 adults and 2 children</td>
                </tr>
                <tr>
                    <td className="detail-label">Refreshment</td>
                    <td className="detail-value">Minibar</td>
                </tr>
                <tr>
                    <td className="detail-label">Extras</td>
                    <td className="detail-value">Jacuzzi</td>
                </tr>
            </table>
        </section>
    </>
}

export default Amenities;