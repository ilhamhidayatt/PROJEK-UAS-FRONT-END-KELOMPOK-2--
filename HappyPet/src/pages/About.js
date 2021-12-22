import React from "react";
import Se from "../assets/se.jpg";
import "../style/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Se})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
    	Fungsi dan manfaat sistem yang kami buat mempercepat penanganan hewan yang sakit hanya melalui via website, konsultasi yang mudah, menjual makanan hewan dan aksesoris hewan,tips dan trick merawat hewan yang di jelaskan secara terperinci, bisa juga berdiskusi antar pecinta hewan , dan berbagai kemudahan lainnya.Website kami beroprasi 24jam penuh sehingga pengguna atau masyarakat bisa menggunakannya setiap saat.
        Kami juga menjual makanan sehat hewan, obat-obatan lengkap,dan aksesoris hewan.Sistem yang ada  masih menggunakan  sistem manual oleh karena itu  untuk mempermudah sistem penjualan  dan pemasaran dengan membuat sebuah aplikasi online berbasis web. Dengan tujuan untuk mempermudah konsumen dalam mendapatkan informasi , dapat melakukan pembelian dan pemesanan layanan perawatan kesehatan pet secara online.
        </p>
      </div>
    </div>
  );
}

export default About;