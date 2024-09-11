import Header from "../component/header";
import CreateArea from "../component/createArea";
import Footer from "../component/footer";
function Home() {
    return <>
        <section className="home-section">
            <Header/>
            <CreateArea/>
            <Footer/>
        </section>
    </>
}

export default Home;