import React from "react";
import { Link } from "react-router-dom";
import "../style/Home2.css";
import BannerImage from "../assets/se.jpg";


function Home2() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> HappyPet Indonesia </h1>
        <p> Kamu bisa mengungkapkan rasa sayangmu pada hewan Peliharaan</p>
        <Link to="/Home">
          <button> Pesan Sekarang </button>
        </Link>
      </div>
      </div>
  );
}

export default Home2;