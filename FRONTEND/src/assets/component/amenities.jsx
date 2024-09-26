import { useEffect, useState } from "react";
import "../componentStyles/amenities.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Amenities() {

    const { id } = useParams();
    const [featureData, setFeatureData] = useState([]);  // Initialize as an array

    useEffect(() => {
        async function getFeatures() {
            try {
                const featureRes = await axios.get(`http://localhost:3000/room/view/${id}`);  // Correct URL
                setFeatureData(featureRes.data);  // The response will now be an array
            } catch (error) {
                console.log("Error Fetching Features!!!", error);
            }
        }
        getFeatures();
    }, [id]);

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