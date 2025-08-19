import "../App.css";import { IoDocumentOutline } from "react-icons/io5";

const Bilgi = () => {
    return (
        <>
            {/* Header / Navbar */}
            <header className="header">
                <nav className="nav flex justify-between items-center px-10 py-5">
                    {/* Menu */}
                    <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <li className="hover:text-red-500 cursor-pointer">Çözümler ve Hizmetler</li>
                        <li className="hover:text-red-500 cursor-pointer">Ürünler</li>
                        <li className="hover:text-red-500 cursor-pointer">Teknolojiler</li>
                        <li className="hover:text-red-500 cursor-pointer">İnsan Kaynakları</li>
                        <li className="hover:text-red-500 cursor-pointer">Kurumsal</li>
                    </ul>

                    {/* Button */}
                    <button className="box bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">
                        İletişim
                    </button>
                </nav>


                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-10 py-20">
                    {/* Left Content */}
                    <div className="intro">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Bilgi Teknolojilerinde <br /> 23 Yıllık Tecrübe
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Müşterilerimizin yüksek seviye rekabet koşullarını yenilikçi çözümler ile
                            karşılamaları için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla
                            Proje Yönetimi, İş Analizi ve Test hizmeti sunmaktayız.
                        </p>
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                placeholder="Mail adresinizi yazınız"
                                className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none"
                            />
                            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
                                Kayıt Ol
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    {/* <div className="flex justify-center">
          <img
            src="/img/computer.png"
            alt="Laptop"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div> */}
                </div>
            </header>
            <section>
                <div className="max-w-7xl mx-auto px-10 py-20">
                    <h2 className="text-2xl font-bold mb-6">Kalite ve Süreç Yönetimi</h2>
                    <p className="text-gray-600 mb-6">
                        Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
                    </p>
                    <div className="grid">
                        <div>
                            <IoDocumentOutline />
                            <h3 className="title">Döküman Analizi</h3>
                            <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                        <div>
                            <IoDocumentOutline />
                            <h3 className="title">Döküman Analizi</h3>
                            <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                        <div>
                            <IoDocumentOutline />
                            <h3 className="title">Döküman Analizi</h3>
                            <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                        <div>
                            <IoDocumentOutline />
                            <h3 className="title">Döküman Analizi</h3>
                            <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                        <div>
                            <IoDocumentOutline />
                            <h3 className="title">Döküman Analizi</h3>
                            <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                        <div>
                            <IoDocumentOutline />
                            <h3 className="title">Döküman Analizi</h3>
                            <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Bilgi;