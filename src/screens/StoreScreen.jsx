import { fmt } from "../utils.js";

export default function StoreScreen({ store, cart, onAddItem, onBack, onGoToCheckout, subtotal }) {
  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);

  return (
    <div>
      <button className="back" onClick={onBack}>← Categorías</button>
      <div className="row" style={{ marginTop: 10 }}>
        <h2 style={{ fontSize: 22 }}>{store.emoji} {store.name}</h2>
      </div>
      <div className="muted">🕐 {store.time} · 🛵⚡ Entrega en moto eléctrica</div>
      {store.items.map((i) => (
        <div className="card row" key={i.id}>
          <div>
            <div style={{ fontWeight: 800 }}>{i.emoji} {i.name}</div>
            <div className="muted">{fmt(i.price)}</div>
          </div>
          <div className="stepper">
            <button className="qty-btn" onClick={() => onAddItem(i.id, -1)} aria-label={"Quitar " + i.name}>−</button>
            <span>{cart[i.id] || 0}</span>
            <button className="qty-btn" onClick={() => onAddItem(i.id, 1)} aria-label={"Agregar " + i.name}>+</button>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 16 }}>
        <button className="btn primary" disabled={cartCount === 0} onClick={onGoToCheckout}>
          Ir a pagar con reciclaje · {fmt(subtotal)}
        </button>
      </div>
    </div>
  );
}
