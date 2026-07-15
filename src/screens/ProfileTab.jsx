export default function ProfileTab() {
  return (
    <div>
      <h2 style={{ fontSize: 24 }}>Mi perfil</h2>
      <div className="card row">
        <div>
          <div style={{ fontWeight: 800, fontSize: 17 }}>Johana Ortiz</div>
          <div className="muted">Ibagué, Tolima · Nivel: EcoEmbajadora 🏅</div>
        </div>
        <div style={{ fontSize: 36 }}>👩🏻‍💼</div>
      </div>
      <div className="card">
        <div style={{ fontWeight: 800 }}>Insignias</div>
        <div style={{ marginTop: 8 }}>
          <span className="badge-rider">♻️ Primer pedido</span>
          <span className="badge-rider">📦 10 kg de cartón</span>
          <span className="badge-rider">🥤 50 botellas PET</span>
          <span className="badge-rider">🌱 1 mes reciclando</span>
        </div>
      </div>
      <div className="card">
        <div style={{ fontWeight: 800 }}>¿Quieres ser TUKI-heroína?</div>
        <div className="muted" style={{ marginTop: 4 }}>
          Si eres madre cabeza de familia o recicladora de oficio, postúlate:
          te formalizamos, te capacitamos y te entregamos una moto eléctrica.
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn ghost">Postularme</button>
        </div>
      </div>
    </div>
  );
}
