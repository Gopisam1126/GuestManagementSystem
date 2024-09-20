import Header2 from "../component/header2";
import "../pageStyles/admin.css";
function Admin() {
    return <>
        <section className="admin-section">
            <div className="admin-header">
                <Header2/>
            </div>
            <div className="admin-body-container">
                <div className="admin-guest-lists">
                    <h4 className="Guests">
                        Guests
                    </h4>
                    <div className="guest-list-container">
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Admin;