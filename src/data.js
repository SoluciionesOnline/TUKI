// ============================================================
// TUKI — datos de referencia del prototipo
// Tarifas de reciclaje, comercios aliados y domiciliarias
// ============================================================

export const RATES = [
  { id: "pet", name: "Plástico PET", detail: "Botellas, envases limpios", price: 1800, emoji: "🥤", co2: 1.5 },
  { id: "carton", name: "Cartón", detail: "Cajas secas y plegadas", price: 600, emoji: "📦", co2: 0.9 },
  { id: "vidrio", name: "Vidrio", detail: "Botellas y frascos", price: 200, emoji: "🫙", co2: 0.3 },
  { id: "aluminio", name: "Aluminio", detail: "Latas de bebida", price: 6000, emoji: "🥫", co2: 9.0 },
  { id: "papel", name: "Papel / Archivo", detail: "Hojas, cuadernos, revistas", price: 800, emoji: "📄", co2: 0.9 },
];

export const STORES = [
  {
    id: "fruti",
    cat: "Mercado",
    name: "Frutiverde · Plaza de la 21",
    time: "25–35 min",
    emoji: "🥑",
    items: [
      { id: "f1", name: "Canasta de frutas (5 kg)", price: 28000, emoji: "🍎" },
      { id: "f2", name: "Verduras de la semana", price: 22000, emoji: "🥬" },
      { id: "f3", name: "Huevos campesinos x30", price: 19500, emoji: "🥚" },
      { id: "f4", name: "Café tolimense 500 g", price: 24000, emoji: "☕" },
    ],
  },
  {
    id: "lechona",
    cat: "Restaurante",
    name: "La Lechonería de la Quinta",
    time: "30–40 min",
    emoji: "🍽️",
    items: [
      { id: "l1", name: "Lechona tolimense (porción)", price: 15000, emoji: "🍛" },
      { id: "l2", name: "Tamal + chocolate", price: 12000, emoji: "🫔" },
      { id: "l3", name: "Almuerzo del día", price: 14000, emoji: "🍲" },
      { id: "l4", name: "Jugo natural 1 L", price: 8000, emoji: "🧃" },
    ],
  },
  {
    id: "drog",
    cat: "Farmacia",
    name: "Droguería El Jordán",
    time: "20–30 min",
    emoji: "💊",
    items: [
      { id: "d1", name: "Kit botiquín básico", price: 32000, emoji: "🩹" },
      { id: "d2", name: "Acetaminofén x20", price: 6500, emoji: "💊" },
      { id: "d3", name: "Suero oral x3", price: 9000, emoji: "🧪" },
      { id: "d4", name: "Pañales etapa 3 x30", price: 38000, emoji: "🍼" },
    ],
  },
  {
    id: "paq",
    cat: "Paquetería",
    name: "Envío punto a punto",
    time: "35–50 min",
    emoji: "📮",
    items: [
      { id: "p1", name: "Sobre / documentos", price: 6000, emoji: "✉️" },
      { id: "p2", name: "Paquete pequeño (< 3 kg)", price: 9000, emoji: "📦" },
      { id: "p3", name: "Paquete mediano (< 8 kg)", price: 14000, emoji: "🎁" },
    ],
  },
];

export const DELIVERY_FEE = 4500;

export const RIDERS = [
  { name: "Marisol Rodríguez", rating: 4.9, trips: 312, kg: 1240 },
  { name: "Yolanda Peña", rating: 4.8, trips: 198, kg: 860 },
  { name: "Diana Cifuentes", rating: 5.0, trips: 421, kg: 1580 },
];

export const INITIAL_ORDERS = [
  { store: "Frutiverde · Plaza de la 21", total: 32500, kg: 6.2, date: "8 jul" },
  { store: "Droguería El Jordán", total: 15500, kg: 3.1, date: "3 jul" },
];

export const INITIAL_LIFETIME_KG = 23.4;
