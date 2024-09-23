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
                </tbody>
            </table>
        </section>
    </>
}

export default Amenities;