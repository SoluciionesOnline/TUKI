const TABS = [
  ["inicio", "🏠", "Inicio"],
  ["tarifas", "⚖️", "Tarifas"],
  ["impacto", "🌎", "Impacto"],
  ["perfil", "👤", "Perfil"],
];

export default function BottomNav({ activeTab, onSelect }) {
  return (
    <div className="nav">
      {TABS.map(([id, ico, label]) => (
        <button
          key={id}
          className={activeTab === id ? "active" : ""}
          onClick={() => onSelect(id)}
        >
          <span className="ico">{ico}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
