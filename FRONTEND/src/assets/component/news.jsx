import "../componentStyles/common.css";
import "../componentStyles/news.css"
function News() {
    return <>
        <section className="latest-news-sec">
            <div className="news-container">
                <div className="news-left-container">
                    <h3 className="ln-head">COMMING SOON...</h3>
                    <div className="news-list">
                        <div className="news-1 news">
                            <img src="\images\party_1.jpg" alt="news-img" className="news-img n1-img" />
                            <div className="e-date-name">
                                <p className="e-date">3 May</p>
                                <p className="e-name">Donec luctus imperdiet</p>
                            </div>
                        </div>
                        <div className="news-2 news">
                            <img src="\images\wedding_reception.jpg" alt="news-img" className="news-img n2-img" />
                            <div className="e-date-name">
                                <p className="e-date">12 June</p>
                                <p className="e-name">Nihilne te nocturnu</p>
                            </div>
                        </div>
                        <div className="news-3 news">
                            <img src="\images\indoor_event_1.jpg" alt="news-img" className="news-img n3-img" />
                            <div className="e-date-name">
                                <p className="e-date">20 July</p>
                                <p className="e-name">Standard Post Format</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-right-container"></div>
            </div>
        </section>
    </>
}

export default News;