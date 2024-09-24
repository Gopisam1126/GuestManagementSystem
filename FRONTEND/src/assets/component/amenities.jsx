/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../componentStyles/amenities.css";
import axios from "axios";

function Amenities() {

    const [roomId, setRoomId] = useState(1);  // Default roomId
    const [featureData, setFeatureData] = useState([]);  // Initialize as an array

    useEffect(() => {
        async function getFeatures() {
            try {
                const featureRes = await axios.get(`http://localhost:3000/room/view/${roomId}`);  // Correct URL
                setFeatureData(featureRes.data);  // The response will now be an array
            } catch (error) {
                console.log("Error Fetching Features!!!", error);
            }
        }
        getFeatures();
    }, [roomId]);

    return (
        <section className="amenities-section">
            <h4 className="amenities-head">Amenities</h4>
            {featureData.length > 0 ? (  // Check if featureData is loaded
                <table className="amenities-table">
                    <tbody className="t-body">
                        {featureData.map((feature, index) => (
                            <tr key={index}>
                                <td className="detail-feature">{feature.feature}:</td>
                                <td className="detail-value">{feature.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading features...</p>
            )}
        </section>
    );
}

export default Amenities;