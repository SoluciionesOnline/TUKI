import { RATES } from "../data.js";
import { fmt } from "../utils.js";

export default function RatesTab() {
  return (
    <div>
      <h2 style={{ fontSize: 24 }}>Tarifas de reciclaje</h2>
      <div className="muted">Valor de referencia que pagamos por tu material limpio y separado.</div>
      {RATES.map((r) => (
        <div className="card row" key={r.id}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>{r.emoji} {r.name}</div>
            <div className="muted">{r.detail}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Baloo 2'", fontWeight: 800, fontSize: 18, color: "var(--green)" }}>{fmt(r.price)}</div>
            <div className="muted">por kg</div>
          </div>
        </div>
      ))}
      <div className="card kraft">
        <div style={{ fontWeight: 800 }}>💡 ¿Cómo funciona?</div>
        <div className="muted" style={{ color: "#5a4d33", marginTop: 4 }}>
          1. Pide tu domicilio. 2. Separa y limpia tu material. 3. Nuestra domiciliaria lo pesa
          al entregar tu pedido. 4. El valor se descuenta del total. El material se comercializa
          y transforma en la cadena de economía circular.
        </div>
      </div>
    </div>
  );
}
