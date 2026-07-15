import { RATES, DELIVERY_FEE } from "../data.js";
import { fmt } from "../utils.js";

export default function CheckoutScreen({
  cartItems,
  subtotal,
  total,
  recyclePct,
  setRecyclePct,
  recycleTarget,
  cashPart,
  materials,
  materialValue,
  remaining,
  canConfirm,
  onAddKg,
  onBack,
  onConfirm,
}) {
  return (
    <div>
      <button className="back" onClick={onBack}>← Volver al comercio</button>
      <h2 style={{ marginTop: 10, fontSize: 24 }}>Paga con tu reciclaje</h2>

      <div className="card">
        {cartItems.map((i) => (
          <div className="row" key={i.id} style={{ marginBottom: 6 }}>
            <span>{i.emoji} {i.name} × {i.qty}</span>
            <b>{fmt(i.price * i.qty)}</b>
          </div>
        ))}
        <hr className="divider" />
        <div className="row"><span className="muted">Subtotal</span><b>{fmt(subtotal)}</b></div>
        <div className="row">
          <span className="muted">Domicilio {recyclePct === 100 && <b style={{ color: "var(--green)" }}>· ¡gratis con reciclaje!</b>}</span>
          <b style={recyclePct === 100 ? { textDecoration: "line-through", color: "var(--ink-soft)" } : {}}>{fmt(DELIVERY_FEE)}</b>
        </div>
        <div className="row" style={{ marginTop: 6, fontSize: 18 }}>
          <b>Total</b><b>{fmt(recyclePct === 100 ? total - DELIVERY_FEE : total)}</b>
        </div>
      </div>

      {/* EcoBilletera — pago mixto */}
      <div className="card deep">
        <div style={{ fontWeight: 800, fontSize: 17 }}>⚖️ EcoBilletera · pago mixto</div>
        <div className="muted" style={{ marginTop: 4 }}>
          Elige cuánto pagas con reciclaje y cuánto en dinero.
        </div>
        <input
          type="range" min={0} max={100} step={10}
          value={recyclePct}
          onChange={(e) => setRecyclePct(+e.target.value)}
          aria-label="Porcentaje a pagar con reciclaje"
          style={{ marginTop: 14 }}
        />
        <div className="row" style={{ marginTop: 4 }}>
          <span>♻️ Reciclaje: <b>{fmt(recyclePct === 100 ? total - DELIVERY_FEE : recycleTarget)}</b></span>
          <span>💵 Efectivo: <b>{fmt(recyclePct === 100 ? 0 : cashPart)}</b></span>
        </div>
      </div>

      <div className="card">
        <div style={{ fontWeight: 800, fontSize: 16 }}>¿Qué materiales vas a entregar?</div>
        <div className="muted">Tarifas de referencia por kilogramo</div>
        {RATES.map((r) => (
          <div className="row" key={r.id} style={{ marginTop: 12 }}>
            <div>
              <div style={{ fontWeight: 800 }}>{r.emoji} {r.name} <span className="muted">· {fmt(r.price)}/kg</span></div>
              <div className="muted">{r.detail}</div>
            </div>
            <div className="stepper">
              <button className="qty-btn" onClick={() => onAddKg(r.id, -0.5)} aria-label={"Quitar medio kilo de " + r.name}>−</button>
              <span>{(materials[r.id] || 0).toFixed(1)}</span>
              <button className="qty-btn" onClick={() => onAddKg(r.id, 0.5)} aria-label={"Agregar medio kilo de " + r.name}>+</button>
            </div>
          </div>
        ))}
        <hr className="divider" />
        <div className="row">
          <span className="muted">Valor de tu reciclaje</span>
          <b style={{ color: "var(--green)" }}>{fmt(materialValue)}</b>
        </div>
        <div className="balance-bar" role="progressbar" aria-label="Cobertura del pago con reciclaje">
          <div className="balance-fill" style={{ width: Math.min(100, recycleTarget ? (materialValue / recycleTarget) * 100 : 100) + "%" }} />
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          {remaining > 0
            ? `Te faltan ${fmt(remaining)} en material (≈ ${(remaining / RATES[0].price).toFixed(1)} kg de PET)`
            : "🎉 ¡Tu reciclaje cubre la parte acordada del pago!"}
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn primary" disabled={!canConfirm} onClick={onConfirm}>
          {canConfirm ? "Confirmar pedido ♻️" : "Agrega material para completar el pago"}
        </button>
      </div>
    </div>
  );
}
