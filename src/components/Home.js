import React from 'react';
import downloadedtr from '../img/downloadable-tr.jpg';
import downloadeden from '../img/downloadable-en.jpg';
import i18n from '../i18n';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="row slideContainer">
                    <div className="col-1 my-auto">
                        <a href="#carouselSlides" role="button" data-slide="prev">
                            <i className="bi bi-chevron-compact-left" style={{ fontSize: "2rem" }}></i>
                        </a>
                    </div>

                    <div className="col-10 mid text-center">
                        <h3 style={{ color: "#e7d844", fontFamily: "fantasy" }}>{i18n.t("slide1header")}</h3>
                        <div id="carouselSlides" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner text-center">

                                <div className="carousel-item active">

                                    <iframe
                                        src="https://www.youtube.com/embed/HdBQoM0qscc"
                                        title="YouTube video player"
                                        allowFullScreen={true}
                                    ></iframe>

                                    <h5 className="iframe-header">{i18n.t("slide1subheader")}</h5>
                                    <p className="iframe-detail">
                                    {i18n.t("slide1content")}
                                        "</p>
                                </div>

                                <div className="carousel-item">

                                    <iframe
                                        src="https://www.youtube.com/embed/AydIOsLfUR0"
                                        title="YouTube video player"
                                        allowFullScreen={true}
                                    ></iframe>

                                    <h5 className="iframe-header">{i18n.t("slide2subheader")}</h5>
                                    <p className="iframe-detail">
                                    {i18n.t("slide2content1")} {i18n.t("slide2content2")} <i className="bi bi-eye"/>{i18n.t("slide2content3")} <i className="bi bi-pencil-square"/> {i18n.t("slide2content4")} <i className="bi bi-trash" />"
                                    {i18n.t("slide2content5")} 
                                    </p>

                                </div>

                                <div className="carousel-item">

                                    <iframe
                                        src="https://www.youtube.com/embed/yhctWffmNk8"
                                        title="YouTube video player"
                                        allowFullScreen={true}
                                    ></iframe>

                                    <h5 className="iframe-header">{i18n.t("slide3subheader")}</h5>
                                    <p className="iframe-detail">{i18n.t("slide3content1")} <i className="bi bi-download"/>"
                                    {i18n.t("slide3content2")}

                                    </p>
                                    <img src={this.props.lang === "tr" ? downloadedtr : downloadeden} alt="downloadedView"/>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-1 my-auto">
                        <a href="#carouselSlides" role="button" data-slide="next">
                            <i className="bi bi-chevron-compact-right" style={{ fontSize: "2rem" }}></i>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;