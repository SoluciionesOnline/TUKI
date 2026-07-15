import TukiLogo from "../components/TukiLogo.jsx";
import { STORES } from "../data.js";

export default function HomeTab({ lifetimeKg, onSelectStore }) {
  return (
    <div>
      <TukiLogo h={42} />
      <div className="tagline" style={{ marginTop: 8 }}>Tú reciclas, tú impactas · Ibagué</div>

      <div className="card deep" style={{ marginTop: 18 }}>
        <div className="row">
          <div>
            <div className="muted">Tu reciclaje acumulado</div>
            <div className="impact-num" style={{ color: "var(--lime)" }}>{lifetimeKg} kg</div>
          </div>
          <div style={{ fontSize: 38 }}>♻️</div>
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          Cada kilo que entregas paga tus domicilios y genera empleo digno.
        </div>
      </div>

      <h3 style={{ marginTop: 20, fontSize: 18 }}>¿Qué necesitas hoy?</h3>
      <div className="grid2">
        {STORES.map((s) => (
          <div
            className="cat-card"
            key={s.id}
            onClick={() => onSelectStore(s)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectStore(s)}
          >
            <div className="cat-emoji">{s.emoji}</div>
            <div className="cat-name">{s.cat}</div>
            <div className="muted">{s.name}</div>
          </div>
        ))}
      </div>

      <div className="card kraft">
        <div style={{ fontWeight: 800 }}>🛵⚡ Nuestras TUKI-heroínas</div>
        <div className="muted" style={{ color: "#5a4d33", marginTop: 4 }}>
          Madres cabeza de familia y recicladoras formalizadas entregan tu pedido
          en motos eléctricas: cero emisiones, ingresos dignos.
        </div>
      </div>
    </div>
  );
}
