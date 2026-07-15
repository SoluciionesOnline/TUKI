export default function TrackingScreen({ rider, materialKg, materialCo2, onDone }) {
  return (
    <div>
      <div className="pill">✅ Pedido confirmado</div>
      <h2 style={{ marginTop: 12, fontSize: 24 }}>¡Tu reciclaje pagó este domicilio!</h2>
      <div className="card">
        <div className="row">
          <div>
            <div style={{ fontWeight: 800, fontSize: 17 }}>{rider.name}</div>
            <div>
              <span className="badge-rider">💜 Madre cabeza de familia</span>
              <span className="badge-rider">♻️ Recicladora formalizada</span>
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              ⭐ {rider.rating} · {rider.trips} entregas · {rider.kg} kg recuperados
            </div>
          </div>
          <div style={{ fontSize: 40 }}>👩🏽</div>
        </div>
        <div className="route">
          <div className="path" />
          <div className="moto">🛵⚡</div>
        </div>
        <div className="muted" style={{ marginTop: 8, textAlign: "center" }}>
          Moto eléctrica · 0 emisiones · Llega en ~28 min
        </div>
      </div>
      <div className="card kraft">
        <div style={{ fontWeight: 800 }}>Al recibir tu pedido:</div>
        <div className="muted" style={{ marginTop: 6, color: "#5a4d33" }}>
          Entrega a {rider.name.split(" ")[0]} los {materialKg.toFixed(1)} kg de material
          reciclable, limpio y separado. Ella lo pesará con báscula certificada y validará el pago en la app.
        </div>
      </div>
      <div className="card deep">
        <div style={{ fontWeight: 800 }}>Impacto de este pedido 🌱</div>
        <div className="row" style={{ marginTop: 10 }}>
          <div>
            <div className="impact-num">{materialKg.toFixed(1)} kg</div>
            <div className="muted">material recuperado</div>
          </div>
          <div>
            <div className="impact-num">{materialCo2.toFixed(1)} kg</div>
            <div className="muted">CO₂ evitado</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <button className="btn lime" onClick={onDone}>Ver mi impacto total</button>
      </div>
    </div>
  );
}
