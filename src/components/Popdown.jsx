import "../styles/Popdown.css";

export default function Popdown({ oneitem }) {
    return (
      <details className="popdown-item">
        <summary className="popdown-header">{oneitem.name}</summary>
        <div className="popdown-content">
          {/* Title under the name */}
          {oneitem.title && <h3 className="popdown-title">{oneitem.title}</h3>}
          
          {/* Render the description as a list */}
          <ul>
            {oneitem.desc.map((item, index) => (
              <li key={index}>{item}</li>  /* Each item is displayed as a list item */
            ))}
          </ul>
  
          {/* Render additional description */}
          {oneitem.additionalDesc && (
            <p>
              <strong>{oneitem.additionalDesc.split(":")[0]}</strong>
              {oneitem.additionalDesc.slice(oneitem.additionalDesc.indexOf(":") + 1)}
            </p>
          )}
      
             {/* Price information */}
            {oneitem.price && (
                <p className="popdown-price">
                    <strong>Pris:</strong> {oneitem.price}
                </p>
                )}
        </div>
      </details>
    );
  }