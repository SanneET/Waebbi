import Popdown from "../components/Popdown.jsx";
import "../styles/Service.css"; // Import your CSS file for styling
import "../styles/Mainstyle.css"; // Import your CSS file for styling
import { Link } from "react-router-dom"; // Importer Link
import ScrollToTop from "../components/Scrolltotop.jsx";
import weabbipakke from "../assets/gif/waebbi2.gif";

function Service() {
  const itemlist = [
    {
      id: "1",
      name: "Starterpakken: Digital begyndelse",
      title: "Indhold:",
      desc: [
        "Grundlæggende webdesign (UI/UX",
        "Opsætning af CMS",
        "Basis SEO-optimering",
        "1 times rådgivning om digital strategi",
        "Enkel tracking opsætning",
      ],
      additionalDesc: "Til dig: som er nystartet og ønsker en enkel hjemmeside med basisfunktioner.", 
      price: "30kr/mdr (kun årlig betaling)",
    },
    {
      id: "2",
      name: "Vækstpakken: Online styrke",
      title: "Indhold:",
      desc: [
        "Skræddersyet webdesign",
        "Avanceret SEO-optimering",
        "Implementering af tracking og analyse",
        "Rådgivning om digital markedsføring (sociale medier, betalt annoncering)",
        "CO₂-reducerede hostingløsninger",
        "3 timers rådgivning om vækststrategi",
        "Til dig: som har en virksomhed og er klar til at udvide online tilstedeværelse og skabe konkret vækst.",
        "Pris: 60kr/mdr (kun årlig betaling)",
      ],
       additionalDesc: "Til dig: som har en nystartet eller lille virksomhed, som ønsker en enkel og professionel online tilstedeværelse.",
       price: "60kr/mdr (kun årlig betaling)",
      
    },
    {
      id: "3",
      name: "Premium: Digital transformation",
      title: "Indhold:",
      desc: [
        "Helhedsorienteret webdesign og branding",
        "Kompleks SEO-struktur og teknisk optimering",
        "Full tracking-setup og løbende analyse",
        "E-handel integration (hvis relevant)",
        "Avanceret digital strategi og kommunikationsplan",
        "Bæredygtige løsninger på webudvikling og hosting",
        "5 timers personlig rådgivning og strategiske workshops",
      ],
      additionalDesc: "Til dig: som har en etableret virksomhed og ønsker at styrke den digitale tilstedeværelse på alle niveauer og implementere bæredygtige løsninger i den online strategi.",
      price: "120kr/mdr (kun årlig betaling)",
    },
    {
      id: "4",
      name: "Skrædersyet forløb: Den personlige løsning",
      title: "Indhold:",
      desc: [
        "Et forløb skræddersyet efter virksomhedens specifikke behov og mål",
        "Omfatter alt fra webdesign til markedsføringsstrategi og bæredygtige løsninger",
        "Løbende rådgivning og opfølgning",
        "Fokus på langsigtet vækst og bæredygtige løsninger",
      ],
      additionalDesc: "Til dig: med en virksomhed med unikke behov og ønsker et 100% skræddersyet forløb.",
      price: "200kr/mdr (kun årlig betaling)",
    },
  ];

  return (
    <main className="main">
      <section>
        <div>
          <h2 className="h2header" >Digitalisering der fungere</h2>
          <p className="broedtekst">Hos Wæbbi forstår vi, at hver virksomhed er unik. Derfor tilbyder vi skræddersyede webdesign- og digitaliseringspakker, der passer til din virksomheds størrelse, mål og ambitioner. Uanset om du er ny på nettet, ønsker at vækste eller har brug for en komplet digital transformation, har vi en pakke, der kan hjælpe dig videre.</p>
          <p className="broedtekst">Vi fokuserer på bæredygtige løsninger, effektivitet og langvarige resultater. Vores forløb inkluderer personlig rådgivning, teknisk ekspertise og stærkt, engagerende design, der gør en reel forskel for din online tilstedeværelse. Se vores pakker og find den løsning, der passer bedst til din virksomhed!</p>
        </div>
      </section>
      <section className="pakkeloesninger">
        <section >
          <h2>Wæbbi viser vej</h2>
          <p>Find den rigtige pakke for dig</p>
          <div className="maskotcontainer">
            <img className="maskot" src={weabbipakke} alt="maskot" />
          </div>
        </section>
      </section>
      <section>
          <div>
            {itemlist.map((item) => (
            <Popdown key={item.id} oneitem={item} />
            ))}
          </div>
        </section>
      {/* Add button linking to contact page */}
      <section className="contact-btn">
        <Link to="/Kontakt">
          <button className="btn-contact">Kontakt os</button>
        </Link>
      </section>
      <section>
        <ScrollToTop />
      </section>
      


    </main>
    
  );
}

export default Service;