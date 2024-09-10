import Header from "../component/header";
import Navbar from "../component/navbar";
import CreateArea from "../component/createArea";
import Footer from "../component/footer";
function Home() {
    return <>
        <section className="home-section">
            <Header/>
            <Navbar/>
            <CreateArea/>
            <Footer/>
        </section>
    </>
}

export default Home;