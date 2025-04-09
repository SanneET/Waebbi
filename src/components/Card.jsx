export default function Card({ title, description, icon }) {
    return (
        <div className="card">
            <div className="icon">{icon}</div> {/* ikonet vises her */}
            <h3 className="h2header">{title}</h3>
            <p>{description}</p>
        </div>
    );
}