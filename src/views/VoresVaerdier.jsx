import Byggesten from "../components/Byggesten";
import "../styles/Voresvaerdier.css"; // Import your CSS file for styling
import "../styles/Mainstyle.css"; // Import your CSS file for styling
import ScrollToTop from "../components/Scrolltotop";
import vaerdierhero from "../assets/img/voresveardier.webp";
import infografik from "../assets/img/infografik.webp";
import weabbivinke from "../assets/gif/waebbi3.gif";

export default function Service() {
    return (  
        <main className="main">
            <section className="hero-section">
                <h2 className="h2header">Vi bygger på fleksible webløsning</h2>
                <div>
                    <p className="broedtekst">Wæbbi er et webbureau for små virksomheder, der vil have en stærk start online. Vi skaber brugervenlige, gennemsigtige og æstetiske løsninger – altid med personlig rådgivning og fokus på dine behov.</p>
                    <p className="broedtekst">Vores tilgang er simpel: Vi guider dig gennem hele processen, forklarer uden teknisk jargon og sikrer, at du får en løsning, der både ser godt ud og performer.</p>
                </div>
            </section>
            <section className="hero">
                <div className="hero-image">
                    <img src={vaerdierhero} alt="" />
                </div>
            </section>

            <section className="istock">
              <p>[www.freepik.com, rawpixel.com]</p>  
            </section>

            <section  className="byggesten-container">
                <div className="byggesten-header">
                    <h2 className="h2header">Byggesten</h2>
                </div>
                
                <div className="byggesten-cards">
                    <Byggesten title="Tilgænglighed for alle" />
                    <Byggesten title="Gennemsigtighed & Etik" />
                    <Byggesten title="Innovation med omtanke" />
                </div>
            </section>
            <section>
                <p className="broedtekst">Vi er et team af passionerede multimediedesignere, der brænder for godt design, brugervenlige løsninger og stærk digital kommunikation. Vi tager dig med hele vejen i processen, så du altid ved, hvad der sker, og hvorfor vi gør, som vi gør. Vi ved, at den digitale verden kan virke uoverskuelig – derfor gør vi det simpelt, gennemsigtigt og tilpasset netop din virksomheds behov.</p>
                <p className="broedtekst">Bæredygtighed er en del af vores tankegang, og vi arbejder aktivt med CO₂-reducerede løsninger for at skabe et mere ansvarligt digitalt aftryk.</p>
            </section>
            <section className="hero">
                <div className="hero-image infografik-image">
                    <img src={infografik} alt="infografik om co2 reducerende løsninger" />
                </div>
            </section>
            <section>
                <p className="broedtekst">Uanset om du har brug for en simpel hjemmeside, en gennemført digital strategi eller hjælp til at styrke din online tilstedeværelse, er vi klar til at rådgive dig – personligt, ærligt og med fokus på resultater.</p>
            </section>
            <section className="maskotcontainer">
                <img src={weabbivinke} alt="weabbi" />
            </section>
            <section>
                <ScrollToTop />
            </section>


        </main>
        

    );
}