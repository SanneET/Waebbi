import React from "react";
import "../styles/Infobox.css"; // Husk at opret denne CSS-fil
import weabbilup from "../assets/gif/waebbi1.gif";

export default function Infobox() {
  return (
    <div className="grid-container">
      <div className="box top">Internettet producerer omkring 3,7% af de globale CO2-udledninger</div>
      <div className="box left-top">Internettet forbruger flere ressourcer end hele verdens flytrafik</div>
      <div className="box left-bottom">En times videostreaming kan udlede omkring 400 gram CO₂, svarende til at køre 2-3 kilometer i bil</div>
      <div className="center">
        <img className="gif" src={weabbilup} alt="Weabbi"/>
      </div>
      <div className="box right-top">Reducere en webside med 100 KB kan spare op til 10 gram CO₂-udledning pr. sidevisning</div>
      <div className="box right-bottom">Optimering af en hjemmesides kode og anvendelse af server-caching kan forbedre effektiviteten og reducere energiforbruget</div>
    </div>
  );
}