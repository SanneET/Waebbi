import Card from "../components/Card.jsx";
import Infobox from "../components/Infobox.jsx"; // Import your Infobox component
import ScrollToTop from "../components/Scrolltotop.jsx";
import "../styles/Card.css"; // Import your CSS file for styling
import "../styles/Mainstyle.css"; // Import your CSS file for styling
import desktopforside from "../assets/img/fosidehero.webp";
import mobileforside from "../assets/img/mobileforsidehero.webp";



export default function Home() {
    return (
        <main className="main">
            <section className="hero">
            <div className="hero-image">
                <img className="desktop-image" src={desktopforside} alt="Hero" />
                <img className="mobile-image" src={mobileforside} alt="Hero-mobile" />
            </div>
            </section>
            <section className="istock">
              <p>[www.freepik.com, FreePik]</p>  
            </section>
            <section>
                <h2 className="h2header">Styrk din digitale webløsning</h2>
                <p className="broedtekst">At få en hjemmeside kan føles som en stor mundfuld – men det behøver det ikke at være. Hos Wæbbi tager vi dig i hånden fra start til slut, så du får en løsning, der passer præcis til din virksomhed.</p>
                <p className="broedtekst">Du en personlig og gennemsigtig samarbejdspartner. Du får en fast kontaktperson, der guider dig gennem hele processen, så du altid ved, hvad der sker.</p>
            </section>
            <section>
                <h2 className="h2header">Hvad tilbyder vi?</h2>
                <p className="broedtekst">
                Vi rådgiver dig om alt fra webdesign (UI/UX), valg af CMS, opsætning af tracking og søgeoptimering til e-handel, kommunikation og digital markedsføring. Vores mål er at sikre, at du træffer de rigtige valg for din virksomheds online tilstedeværelse – uden teknisk jargon og med fokus på en løsning, der passer til dine behov. </p>
                
            </section>

            <section className="services">
        
                <div className="cards">
                    <Card title="Personlig rådgivning" description="Få personlig rådgivning om din webstrategi." icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
                            <path fill="#000" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"/>
                        </svg>
                    } />
                    <Card title="Webdesign UI/UX" description="Vi skaber brugervenlige og flotte designs." icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <path fill="#000" d="M34.87 32.21L30 27.37V8.75l-2.3-4.23a2 2 0 0 0-3.54 0L22 8.76v10.65L3.71 1.21A1 1 0 0 0 2 1.92V10h2.17v1.6H2V18h2.17v1.6H2v6.65h2.17v1.6H2v5.07a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71M10 26v-9.06L19.07 26Zm18 2.11h-4v-2.43h4Zm0-4h-4V9.25l1.94-3.77L28 9.26Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/>
                        </svg>
                    }/>
                    <Card title="CO2 reducerede løsninger" description="Mere bæredygtige websites." icon={
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="#000" d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183"/>
                        </svg>
                    }/>
                    <Card title="Opsætning og tracking" description="Vi hjælper med SEO og tracking." icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="#000" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zM3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"/>
                        </svg>
                    } />
                    <Card title="Kommunikation" description="Vi sørger for dit online brand skinner." icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="#000" fill-rule="evenodd" d="m10.549 21.528l.25-.423c.4-.677.6-1.015.92-1.204s.736-.202 1.568-.229c.781-.025 1.306-.093 1.755-.279a3.86 3.86 0 0 0 2.086-2.086c.294-.709.294-1.607.294-3.403v-.772c0-2.524 0-3.786-.568-4.713a3.86 3.86 0 0 0-1.273-1.273c-.927-.568-2.19-.568-4.713-.568H8.554c-2.524 0-3.786 0-4.713.568A3.86 3.86 0 0 0 2.568 8.42C2 9.346 2 10.61 2 13.132v.771c0 1.797 0 2.695.293 3.404a3.86 3.86 0 0 0 2.087 2.086c.449.186.973.254 1.754.28c.833.026 1.25.039 1.569.228s.52.527.92 1.204l.25.423a.98.98 0 0 0 1.676 0m2.535-7.239a.964.964 0 1 0 0-1.928a.964.964 0 0 0 0 1.928m-2.41-.964a.964.964 0 1 1-1.927 0a.964.964 0 0 1 1.928 0m-4.337.964a.964.964 0 1 0 0-1.928a.964.964 0 0 0 0 1.928" clip-rule="evenodd"/><path fill="#000" d="M15.17 2c1.151 0 2.067 0 2.802.07c.753.071 1.39.222 1.957.57a4.34 4.34 0 0 1 1.431 1.43c.348.567.498 1.204.57 1.957c.07.736.07 1.651.07 2.803v.787c0 .82 0 1.472-.036 2c-.037.541-.114 1.006-.294 1.44a4.34 4.34 0 0 1-2.428 2.38q-.191.074-.334.122c.014-.469.014-1.003.014-1.605v-.893c0-1.201 0-2.208-.078-3.026c-.082-.857-.259-1.66-.712-2.4a5.36 5.36 0 0 0-1.768-1.768c-.738-.452-1.542-.63-2.4-.711c-.817-.078-1.824-.078-3.026-.078H8.483c-.816 0-1.542 0-2.18.024c.03-.103.07-.22.118-.36q.12-.352.315-.67a4.34 4.34 0 0 1 1.431-1.433c.568-.347 1.205-.498 1.958-.57C10.859 2 11.775 2 12.927 2z"/>
                        </svg>
                    } />
                    <Card title="Søgeoptimering SEO" description="Bliv synlig på Google." icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 12"><path fill="#000" fill-rule="evenodd" d="M8.5 5.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-.393 3.668a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd"/>
                        </svg>
                    } />
                </div>
            </section>
            

            <section>
                <h2 className="h2header infobox">Vidste du at...</h2>
                
                <Infobox />
            </section>
            <section>
                <ScrollToTop />
            </section>
        </main>
    );
}