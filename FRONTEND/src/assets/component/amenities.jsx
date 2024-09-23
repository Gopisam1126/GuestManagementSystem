import { useEffect, useState } from "react";
import "../componentStyles/amenities.css";
import axios from "axios";
function Amenities() {

    const [featureData, setFeatureData] = useState([])

    useEffect(() => {

        async function getFeatures() {
            try {
                const featureRes = await axios.get("http://localhost:3000/getFeatures");
                setFeatureData(featureRes.data)
            } catch (error) {
                console.log("Error Feteching Features!!!", error);
            }
        }
        getFeatures();
    }, []);

    return <>
        <section className="amenities-section">
            <h4 className="amenities-head">
                Amenities
            </h4>
            <table className="amenities-table">
                <tbody className="t-body">
                    {featureData.map((feature) => (
                        <tr key={feature.feature_id}>
                            <td className="detail-value">{feature.size} square inch</td>
                        </tr>
                    ))}
                    {/* <tr className="table-row tr-1">
                        <td className="detail-label dl-1">Size</td>
                        <td className="detail-value">175 square feet</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Entertainment</td>
                        <td className="detail-value">46 Inch LED TV</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Connectivity</td>
                        <td className="detail-value">Free Wi-Fi</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Butler Service</td>
                        <td className="detail-value">Not Available</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Guests</td>
                        <td className="detail-value">Up to 7 guests</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Location</td>
                        <td className="detail-value">Front side of hotel</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Occupancy</td>
                        <td className="detail-value">2 adults and 2 children</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Refreshment</td>
                        <td className="detail-value">Minibar</td>
                    </tr>
                    <tr className="table-row">
                        <td className="detail-label">Extras</td>
                        <td className="detail-value">Jacuzzi</td>
                    </tr> */}
                </tbody>
            </table>
        </section>
    </>
}

export default Amenities;