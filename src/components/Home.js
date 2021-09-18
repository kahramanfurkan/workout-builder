import React from 'react';
import downloadedView from '../img/downloaded-view.jpg';


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
                        <h3 style={{ color: "#e7d844", fontFamily: "fantasy" }}>Nasıl kullanılır?</h3>
                        <div id="carouselSlides" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner text-center">

                                <div className="carousel-item active">

                                    <iframe
                                        src="https://www.youtube.com/embed/HdBQoM0qscc"
                                        title="YouTube video player"
                                        allowFullScreen={true}
                                    ></iframe>

                                    <h5 className="iframe-header">Nasıl egzersiz oluştururum?</h5>
                                    <p className="iframe-detail">
                                        "Egzersiz Oluştur" butonuna tıklayıp,hemen oluşturmaya başlayabilirsin.
                                        Gerekli alanları doldurduktan sonra "Egzersizlerime Ekle" butonuna basman yeterli.Eklediğin egzersiz,
                                        "Egzersiz Listem" bölümünde görüntülenir.Detaylar için videoyu izle! "Egzersiz listem" bölümünün nasıl kullanıldığını öğrenmek için
                                        yana kaydır...

                                        "</p>
                                </div>

                                <div className="carousel-item">

                                    <iframe
                                        src="https://www.youtube.com/embed/AydIOsLfUR0"
                                        title="YouTube video player"
                                        allowFullScreen={true}
                                    ></iframe>

                                    <h5 className="iframe-header">"Egzersiz Listem" nasıl kullanılır?</h5>
                                    <p className="iframe-detail">
                                        Eklediğin tüm egzersizlerin,"Egzersiz Listem" bölümünde görüntülenir.Bu bölümde en sağdaki 
                                        "görüntüle <i className="bi bi-eye"/>,düzenle <i className="bi bi-pencil-square"/>  ve sil <i className="bi bi-trash" />"
                                        butonlarını kullanarak dilediğin gibi düzenleme yapabilirsin.En üstte bulunan "Tümünü sil" butonunu kullanarak listeni
                                        baştan yaratmaya başlayabilirsin. Listen hazır mı ? Listeni nasıl indirip dilediğin yerde kullanabileceğini öğrenmek için
                                        yana kaydır...
                                    </p>

                                </div>

                                <div className="carousel-item">

                                    <iframe
                                        src="https://www.youtube.com/embed/yhctWffmNk8"
                                        title="YouTube video player"
                                        allowFullScreen={true}
                                    ></iframe>

                                    <h5 className="iframe-header">Listemi nasıl indiririm ?</h5>
                                    <p className="iframe-detail">Tüm egzersizlerini listene ekledin mi ? O halde hazır görünüyorsun.
                                    Hemen "Egzersiz Listem" sayfasına gidip sağ üst köşede bulunan "indir <i className="bi bi-download"/>"
                                    butonuna tıklayıp egzersiz listenin ".html" uzantılı bir kopyasını indirebilirsin!
                                    İndirdiğin dosyayı istediğin cihazda açabilirsin. İndirdiğin dosya aşağıdaki gibi görünecek :

                                    </p>
                                    <img src={downloadedView}/>

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