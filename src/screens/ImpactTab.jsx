import { fmt } from "../utils.js";

export default function ImpactTab({ lifetimeKg, orders }) {
  return (
    <div>
      <h2 style={{ fontSize: 24 }}>Tu impacto 🌎</h2>
      <div className="card deep">
        <div className="row">
          <div>
            <div className="impact-num" style={{ color: "var(--lime)" }}>{lifetimeKg} kg</div>
            <div className="muted">material recuperado</div>
          </div>
          <div>
            <div className="impact-num" style={{ color: "var(--lime)" }}>{(lifetimeKg * 1.4).toFixed(0)} kg</div>
            <div className="muted">CO₂ evitado</div>
          </div>
        </div>
        <hr className="divider" style={{ borderColor: "#5636a8" }} />
        <div className="muted">
          Equivale a 🌳 {Math.max(1, Math.round(lifetimeKg / 21))} árboles absorbiendo CO₂ durante un año.
        </div>
      </div>
      <h3 style={{ marginTop: 18, fontSize: 17 }}>Historial de pedidos</h3>
      {orders.map((o, i) => (
        <div className="card row" key={i}>
          <div>
            <div style={{ fontWeight: 800 }}>{o.store}</div>
            <div className="muted">{o.date} · pagado con ♻️ {o.kg.toFixed(1)} kg</div>
          </div>
          <b>{fmt(o.total)}</b>
        </div>
      ))}
      <div className="card kraft">
        <div style={{ fontWeight: 800 }}>Impacto social TUKI</div>
        <div className="muted" style={{ color: "#5a4d33", marginTop: 4 }}>
          👩🏽 32 mujeres cabeza de familia formalizadas · 🛵⚡ 18 motos eléctricas en operación ·
          ♻️ 14,8 toneladas recuperadas este año en Ibagué.
        </div>
      </div>
    </div>
  );
}
