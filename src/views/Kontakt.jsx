import ScrollToTop from "../components/Scrolltotop";
import "../styles/Kontakt.css"; // Import your CSS file for styling
import "../styles/Mainstyle.css"; // Import your CSS file for styling
import desktopimg from "../assets/img/kontakhero.webp";
import mobileimg from "../assets/img/mobilekontakthero.webp";

export default function Service() {

const handleClick = () => {
    alert("Din besked er sendt!");
 };

return(
    <main className="main">
        {/* Skal erstattes */}
        <section className="hero">
                <div className="hero-image">
                    <img className="desktop-image" src={desktopimg} alt="Hero" />
                    <img className="mobile-image" src={mobileimg} alt="Weabbi"/>
                </div>
        </section>
        <section className="istock">
            <p>[www.freepik.com, FreePik]</p>  
        </section>

        <section>
            <h1 className="h1">Tag det første skridt</h1>
        </section>
        <section>
            <form className="felter">
                <input type="text" placeholder="Fornavn" name="fornavn" className="indputs" />

                <input type="text" placeholder="Efternavn" name="efternavn" className="indputs" />
            </form>

            <form className="felter" id="bunden">
                <input type="email" placeholder="E-mail" name="email" className="indputs" />

                <input type="text" placeholder="Telefonnummer" name="telefonnummer" className="indputs" />
            </form>
            
            <form className="besked">
                    <textarea name="besked" cols="90" rows="10" placeholder="Besked"></textarea>
            </form>
            
            <section className="ringop">
                <div className="checkboxbackground">
                    <input type="checkbox" />
                    <p>Jeg vil gerne ringes op</p>
                </div>
            </section>

            <div className="centerbtn">
                <button onClick={handleClick} className="btn">Send besked</button>
            </div>
        </section>
        <section>
            <ScrollToTop />
        </section>

    </main>
);

}