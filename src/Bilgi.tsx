import "../App.css"; import { IoDocumentOutline } from "react-icons/io5";
import "../App.css"; import { IoIosStarOutline } from "react-icons/io";
import "../App.css"; import { LuCrown } from "react-icons/lu";
import "../App.css"; import { FaFigma } from "react-icons/fa";
import "../App.css"; import { PiChartBar } from "react-icons/pi";
import "../App.css"; import { PiChartPieThin } from "react-icons/pi";
import "../App.css"; import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";



// Replace with actual image imports or URLs
const logos = [
    { src: "/img/borusan.png", alt: "BORUSAN" },
    { src: "/img/istanbul.png", alt: "İstanbul Bilgi Üniversitesi" },
    { src: "/img/book my show.png", alt: "bookmyshow" },
    { src: "/img/akbank.png", alt: "AKBANK" },
    { src: "/img/aktas.png", alt: "aktaş" },
    { src: "/img/amazon.png", alt: "amazon" },
    { src: "/img/akcan.png", alt: "AKÇANSA" },
    { src: "/img/ola.png", alt: "OLA" },
    { src: "/img/ola.png", alt: "Tümünü Gör->" },
];
import { CiLinkedin } from "react-icons/ci";
import { TiSocialFlickr } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";


const Bilgi = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className="header bg-gray-900 text-black">
                <nav className="flex justify-between items-center px-8 md:px-20 py-10 relative">
                    <div className="text-xl font-bold px-9">

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-8 font-medium">
                            <li className="hover:text-red-300 cursor-pointer">Çözümler ve Hizmetler</li>
                            <li className="hover:text-red-300 cursor-pointer">Ürünler</li>
                            <li className="hover:text-red-300 cursor-pointer">Teknolojiler</li>
                            <li className="hover:text-red-300 cursor-pointer">İnsan Kaynakları</li>
                            <li className="hover:text-red-300 cursor-pointer">Kurumsal</li>
                        </ul>
                    </div>

                    {/* Contact Button */}
                    <button className="hidden md:block bg-red-500 px-5 py-2 rounded-md hover:bg-red-600">
                        İletişim
                    </button>

                    {/* Hamburger Icon (Mobile) */}
                    <div className="md:hidden z-20" onClick={toggleMenu}>
                        {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute top-0 left-0 w-full bg-red-500 transition-transform duration-300 ease-in-out${menuOpen ? 'translate-y-0' : '-translate-y-full'
                            } md:hidden`}
                    >
                        <ul className="items-center font-medium">
                            <li>Çözümler ve Hizmetler</li>
                            <li>Ürünler</li>
                            <li>Teknolojiler</li>
                            <li>İnsan Kaynakları</li>
                            <li>Kurumsal</li>
                            <li>
                                <button className="bg-black text-red-600 px-5 py-6 rounded-md">
                                    İletişim
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-10 py-20">
                    <div className="ml-[-115px] text-left mt-[-180px]">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Bilgi Teknolojilerinde <br /> 23 Yıllık Tecrübe
                        </h1>
                        <p className="text-black mb-6">
                            Müşterilerimizin yüksek seviye rekabet koşullarını yenilikçi çözümler ile
                            karşılamaları için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla
                            Proje Yönetimi, İş Analizi ve Test hizmeti sunmaktayız.
                        </p>
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                placeholder="Mail adresinizi yazınız"
                                className="border border-gray-300 text-black rounded-md px-4 py-2 w-64 focus:outline-none"
                            />
                            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
                                Kayıt Ol
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="max-w-7xl mx-auto px-10 py-20">
                    <div className="second">
                        <h2 className="text-2xl font-bold mb-6">Kalite ve Süreç Yönetimi</h2>
                        <p className="text-gray-600 mb-6">
                            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <IoDocumentOutline className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Döküman Analizi</h3>
                            <p className="text-gray-600 text-sm">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <IoIosStarOutline className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Kabul ve Değerlendirme</h3>
                            <p className="text-gray-600 text-sm">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <LuCrown className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold mb-2">İş Kuralları Analizi</h3>
                            <p className="text-gray-600 text-sm">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <PiChartBar className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Akış Diyagramları</h3>
                            <p className="text-gray-600 text-sm">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <PiChartPieThin className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Paydaş Analizi</h3>
                            <p className="text-gray-600 text-sm">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <FaFigma className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Prototipleme</h3>
                            <p className="text-gray-600 text-sm">Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="test-management">
                <div className="test-management__content">
                    <h2>Test Yönetimiyle Neler Sağlıyoruz?</h2>
                    <p>IoT Destekli Çözümler</p>
                </div>

                <div className="test-mange">
                    {[
                        "Yazılım Kalitesini Arttırıyoruz",
                        "Olası Hataları Önceden Belirliyoruz",
                        "Oluşabilecek Riskleri Önlüyoruz",
                        "Zaman ve Maliyetten Tasarruf Sağlıyoruz"
                    ].map((text, index) => (
                        <div className="bullet" key={index}>
                            <span className="icon"><MdKeyboardDoubleArrowRight />
                            </span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="section-wrapper">
                {/* Section 1: Kalite ve Süreç Yönetimi */}
                <section className="section">

                    <div className="section__content">
                        <h2>Kalite ve Süreç Yönetimi</h2>
                        <p>
                            Deneyimli kadromuz, birçok farklı sektörden deneyimli, PMP sertifikasına sahip uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf noktalarını güçlendirmek, aksayan işlerinizi düzeltmek, uluslararası geçerliliği olan PMP metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.
                        </p>
                        <button className="cta-button">Kayıt ol</button>
                    </div>
                    <div className="section__image kalite-image">
                        <div>
                            <img src="img/kalite.png" alt="" />
                        </div>
                    </div>
                </section>

                {/* Section 2: Test Yönetimi ve Analizi */}
                <section className="section">
                    <div className="section__image test-image" >
                        <div>
                            <img src="img/test.jpg" alt="" />
                        </div>
                    </div>
                    <div className="section__content">
                        <h2>Test Yönetimi ve Analizi</h2>
                        <p>
                            Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını örnek arayüzler gerçekleştirildiğinde testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uyarlamaktayız. Deneyimli test ekibimiz, kurumsal yazılım kalitesi yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve katma değerli bir müşteri deneyimi sunmaktadır.
                        </p>
                        <button className="cta-button">Kayıt ol</button>
                    </div>

                </section>
            </div>

            <section className="references">
                <h2>Referanslarımız</h2>
                <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
                <div className="logo-grid">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="logo" />
                    ))}

                </div>
            </section>
            <section className="contact-section">
                <div className="icon-wrapper">
                    <div><LuUsers /></div>
                    <div className="circle filled"></div>
                </div>
                
                <h2 className="contact-title">Bize Ulaşın</h2>
                <p className="contact-description">
                    Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.
                </p>

                <button className="contact-button">Bize Ulaşın</button>
            </section>
            <footer className="footer">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Çözüm ve Hizmetler</h4>
                        <ul>
                            <li>Yazılım Geliştirme</li>
                            <li>Outsourcing</li>
                            <li>Kalite ve Süreç Yönetimi</li>
                            <li>Danışmanlık</li>
                            <li>IoT Destekli Çözümler</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Ürünler</h4>
                        <ul>
                            <li>Eğitim Yönetim Sistemi</li>
                            <li>İnsan Sermayesi Yönetim Sistemi</li>
                            <li>Müşteri İlişkileri Yönetim Sistemi</li>
                            <li>İçerik Yönetim Sistemi</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Kurumsal</h4>
                        <ul>
                            <li>Hakkımızda</li>
                            <li>Belge ve Yetkinlikler</li>
                            <li>İş Ortakları</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>İletişim</h4>
                        <ul>
                            <li>Bilgi İstek Formu</li>
                            <li>Uzman Talep Formu</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© Copyright 2010-2021 - Can Çevik</p>
                   <div className="footericon">
                     <TiSocialFlickr />
                    <CiLinkedin />
                    <FiTwitter />
                    <FaInstagram />
                    <CiFacebook />
                    </div>

                </div>
            </footer>

        </>
    );
};

export default Bilgi;