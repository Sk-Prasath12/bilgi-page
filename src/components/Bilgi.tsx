import { useState } from "react";
import { BarChart3, Box, ChevronRight, FileText, Landmark, Menu, Star, Users, X, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { TiSocialFlickr } from "react-icons/ti";
// You should wrap your component logic in a function
export default function Bilgi() {
  const [open, setOpen] = useState(false);

  const features = [
    { text: "Yazılım Kalitesini Arttırıyoruz" },
    { text: "Olası Hataları Önceden Belirliyoruz" },
    { text: "Oluşabilecek Riskleri Önlüyoruz" },
    { text: "Zaman ve Maliyetten Tasarruf Sağlıyoruz" },
  ];

// const logos = [
//   { name: "Borusan", src: "img/borusan.png" },
//   { name: "Istanbul Bilgi Üniversitesi", src: "img/istanbul.png" },
//   { name: "Akbank", src: "img/akbank.png" },
//   { name: "Akçansa", src: "img/akcan.png" },
//   { name: "Aktaş", src: "img/aktas.png" },
//   { name: "Amazon", src: "img/amazon.png" },
//   { name: "BookMyShow", src: "img/bookmyshow.png" },
//   { name: "Ola", src: "img/ola.png" },
// ];






  // const items = [
  //   {
  //     icon: <FileText className="w-10 h-10 text-pink-500" />,
  //     title: "Döküman Analizi",
  //     desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  //   },
  //   {
  //     icon: <Star className="w-10 h-10 text-purple-500" />,
  //     title: "Kabul ve Değerlendirme",
  //     desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  //   },
  //   {
  //     icon: <Landmark className="w-10 h-10 text-sky-500" />,
  //     title: "İş Kuralları Analizi",
  //     desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  //   },
  //   {
  //     icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
  //     title: "Akış Diyagramları",
  //     desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  //   },
  //   {
  //     icon: <Users className="w-10 h-10 text-red-500" />,
  //     title: "Paydaş Analizi",
  //     desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  //   },
  //   {
  //     icon: <Box className="w-10 h-10 text-orange-500" />,
  //     title: "Prototipleme",
  //     desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  //   },
  // ];
const items = [
  {
    icon: FileText,
    bg: "bg-[#F472B6]",
    title: "Döküman Analizi",
    desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  },
  {
    icon: Star,
    bg: "bg-[#C084FC]",
    title: "Kabul ve Değerlendirme",
    desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  },
  {
    icon: Landmark,
    bg: "bg-[#60A5FA]",
    title: "İş Kuralları Analizi",
    desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  },
  {
    icon: BarChart3,
    bg: "bg-[#60A5FA]",
    title: "Akış Diyagramları",
    desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  },
  {
    icon: Users,
    bg: "bg-[#F87171]",
    title: "Paydaş Analizi",
    desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  },
  {
    icon: Box,
    bg: "bg-[#FACC15]",
    title: "Prototipleme",
    desc: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
  },
];

   


  return (


    

    <div className="font-sans">
      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/img/computer.png')" }}
      >
        {/* Navbar on top of background */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-transparent">
          <h1 className="text-xl font-bold text-black"></h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-gray-800">
            <a href="#">Çözüm ve Hizmetler</a>
            <a href="#">Ürünler</a>
            <a href="#">Teknolojiler</a>
            <a href="#">İnsan Kaynakları</a>
            <a href="#">Kurumsal</a>
            <button className="bg-red-500 text-white px-4 py-1 rounded">
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full md:hidden flex flex-col items-start gap-4 px-6 py-4 bg-white/80 backdrop-blur-md shadow">
            <a href="#">Çözüm ve Hizmetler</a>
            <a href="#">Ürünler</a>
            <a href="#">Teknolojiler</a>
            <a href="#">İnsan Kaynakları</a>
            <a href="#">Kurumsal</a>
            <button className="bg-red-500 text-white px-4 py-1 rounded w-full">
              İletişim
            </button>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left mt-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Bilgi Teknolojilerinde <br /> 23 Yıllık Tecrübe
            </h2>
            <p className="text-gray-800 mb-6">
              Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
              farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
              Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
            </p>

            {/* Email Subscribe */}
            <div className="flex items-center border rounded overflow-hidden max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Mail bültenimize kayıt ol"
                className="px-5 py-3 w-full outline-none"
              />
              <button className="bg-red-500 text-white px-6 py-0">
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </section>

    <section className="max-w-[94vw] mx-auto py-12 px-6 sm:py-16 sm:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Kalite ve Süreç Yönetimi
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde
          tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi
          hizmetleri sunmaktayız.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 text-center">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white shadow-sm rounded-2xl hover:shadow-md transition"
            >
              <div
                className={`mb-4 w-14 h-14 flex items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>


    

    

         <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Test Yönetimiyle Neler Sağlıyoruz?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-12">
          IoT Destekli Çözümler
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-3 text-sm sm:text-base font-medium"
            >
              <ChevronRight className="w-5 h-5 shrink-0 text-white" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="px-6 md:px-12 lg:px-20 py-16 space-y-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Kalite ve Süreç Yönetimi
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
            sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
            Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz
            alanları güçlendirmek, uluslararası geçerliliği olan PMP®
            metodolojisini şirketinizde uygulamak ve geliştirmek için
            yanınızdayız.
          </p>
          <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
            Keşfet
          </button>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="img/kalite.png"
            alt="Presentation"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="img/test.jpg"
            alt="Testing"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Test Yönetimi ve Analizi
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
            amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya
            da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
            ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
            baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
            sunmaktadır.
          </p>
          <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
            Keşfet
          </button>
        </div>
      </div>
    </section>
<section className="references py-10 px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        Referanslarımız
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">
                        Bize güvenen ve beraber çalıştığımız iş ortaklarımız
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 py-10">
                    {/* BORUSAN */}
                    <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-20 sm:w-[10rem] sm:h-20 mt-10">
                        <img
                            src="/img/borusan.png"
                            alt="BORUSAN"
                            className="max-h-8 sm:max-h-10 object-contain"
                        />
                    </div>

                    {/* İstanbul Bilgi Üniversitesi & BookMyShow */}
                    <div className="flex flex-col gap-2 ">
                        <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                            <img
                                src="/img/istanbul.png"
                                alt="İstanbul Bilgi Üniversitesi"
                                className="max-h-8 sm:max-h-10 object-contain"
                            />
                        </div>
                        <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                            <img
                                src="/img/book my show.png"
                                alt="BookMyShow"
                                className="max-h-8 sm:max-h-10 object-contain"
                            />
                        </div>
                    </div>

                    {/* AKBANK & Aktaş */}
                    <div className="flex flex-col gap-2 mt-[-25px]">
                        <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                            <img
                                src="/img/akbank.png"
                                alt="AKBANK"
                                className="max-h-8 sm:max-h-10 object-contain"
                            />
                        </div>
                        <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                            <img
                                src="/img/akcan.png"
                                alt="Aktaş"
                                className="max-h-8 sm:max-h-10 object-contain"
                            />
                        </div>

                        {/* Tümünü Gör Button */}
                        <div className="mt-2 flex justify-center">
                            <button className="bg-white shadow rounded flex items-center justify-center px-3 py-2 w-28 h-10 sm:w-[10rem] sm:h-12 text-red-500 font-semibold text-sm">
                                Tümünü Gör
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* AKÇANSA & OLA */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                            <img
                                src="/img/aktas.png"
                                alt="AKÇANSA"
                                className="max-h-8 sm:max-h-10 object-contain"
                            />
                        </div>
                        <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                            <img
                                src="/img/ola.png"
                                alt="OLA"
                                className="max-h-8 sm:max-h-10 object-contain"
                            />
                        </div>
                    </div>
                      <div className="mt-10">
                    {/* Amazon */}
                    <div className="bg-white shadow rounded flex items-center justify-center p-2 sm:p-3 w-28 h-16 sm:w-[10rem] sm:h-20">
                        <img
                            src="/img/amazon.png"
                            alt="Amazon"
                            className="max-h-8 sm:max-h-10 object-contain"
                        />
                    </div>
                    </div>
                </div>
            </section>









     <section className="bg-white py-16 px-6 sm:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Icon with Red Circle Accent */}
        <div className="relative inline-block mb-6">
          {/* Red circle background */}
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"></span>
          {/* Lucide icon */}
          <Users className="w-12 h-12 text-black relative z-10" strokeWidth={2} />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Bize Ulaşın
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mt-3 mb-6">
          Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.
        </p>

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md transition">
          Bize Ulaşın
        </button>
      </div>
    </section>
       <footer className="bg-red-600 text-white px-6 py-10 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {/* Solutions and Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Çözüm ve Hizmetler</h3>
          <ul className="space-y-2 text-sm">
            <li>Yazılım Geliştirme</li>
            <li>Outsourcing</li>
            <li>Kalite ve Süreç Yönetimi</li>
            <li>Danışmanlık</li>
            <li>IoT Destekli Çözümler</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Ürünler</h3>
          <ul className="space-y-2 text-sm">
            <li>Eğitim Yönetim Sistemi</li>
            <li>İnsan Sermayesi Yönetim Sistemi</li>
            <li>Müşteri İlişkileri Yönetim Sistemi</li>
            <li>İçerik Yönetim Sistemi</li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Kurumsal</h3>
          <ul className="space-y-2 text-sm">
            <li>Hakkımızda</li>
            <li>Belge ve Yetkinlikler</li>
            <li>İş Ortakları</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">İletişim</h3>
          <ul className="space-y-2 text-sm">
            <li>Bilgi İstek Formu</li>
            <li>Uzman Talep Formu</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">© Copyright 2010-2021 - Can Çevik</p>
        <div className="flex space-x-4">
           <a href="#" aria-label="socialmedia"><TiSocialFlickr className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>

    </div>
  );
}


