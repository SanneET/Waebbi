import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav style={{display: "flex", gap: "20px"}}>
                <p>
                    <Link to="">Service</Link>
                </p>
                <p>
                    <Link to="first">Vores Værdier</Link>
                </p>
                <p>
                    <Link to="second">Kontakt</Link>
                </p>
            </nav>
        </header>
    )
}