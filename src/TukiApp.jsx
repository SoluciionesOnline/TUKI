import { useState, useMemo } from "react";
import "./styles.css";

import { RATES, DELIVERY_FEE, RIDERS, INITIAL_ORDERS, INITIAL_LIFETIME_KG } from "./data.js";

import BottomNav from "./components/BottomNav.jsx";
import HomeTab from "./screens/HomeTab.jsx";
import RatesTab from "./screens/RatesTab.jsx";
import ImpactTab from "./screens/ImpactTab.jsx";
import ProfileTab from "./screens/ProfileTab.jsx";
import StoreScreen from "./screens/StoreScreen.jsx";
import CheckoutScreen from "./screens/CheckoutScreen.jsx";
import TrackingScreen from "./screens/TrackingScreen.jsx";

// ============================================================
// TUKI — "Tú reciclas, tú impactas"
// Prototipo interactivo · Domicilios pagados con reciclaje
// Ibagué, Tolima · Economía circular + empoderamiento femenino
// ============================================================

export default function TukiApp() {
  const [tab, setTab] = useState("inicio");
  const [screen, setScreen] = useState(null); // null | store | checkout | tracking
  const [store, setStore] = useState(null);
  const [cart, setCart] = useState({});
  const [recyclePct, setRecyclePct] = useState(100);
  const [materials, setMaterials] = useState({}); // id -> kg
  const [rider] = useState(RIDERS[Math.floor(Math.random() * RIDERS.length)]);
  const [lifetimeKg, setLifetimeKg] = useState(INITIAL_LIFETIME_KG);
  const [orders, setOrders] = useState(INITIAL_ORDERS);

  const cartItems = useMemo(() => {
    if (!store) return [];
    return store.items.filter((i) => cart[i.id]).map((i) => ({ ...i, qty: cart[i.id] }));
  }, [cart, store]);

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + DELIVERY_FEE;
  const recycleTarget = (total * recyclePct) / 100;
  const cashPart = total - recycleTarget;

  const materialValue = Object.entries(materials).reduce((s, [id, kg]) => {
    const r = RATES.find((x) => x.id === id);
    return s + (r ? r.price * kg : 0);
  }, 0);
  const materialKg = Object.values(materials).reduce((s, v) => s + v, 0);
  const materialCo2 = Object.entries(materials).reduce((s, [id, kg]) => {
    const r = RATES.find((x) => x.id === id);
    return s + (r ? r.co2 * kg : 0);
  }, 0);
  const remaining = Math.max(recycleTarget - materialValue, 0);
  const canConfirm = cartItems.length > 0 && remaining <= 0;

  const addKg = (id, delta) =>
    setMaterials((m) => {
      const next = Math.max(0, Math.round(((m[id] || 0) + delta) * 2) / 2);
      const copy = { ...m, [id]: next };
      if (next === 0) delete copy[id];
      return copy;
    });

  const addItem = (id, delta) =>
    setCart((c) => {
      const next = Math.max(0, (c[id] || 0) + delta);
      const copy = { ...c, [id]: next };
      if (next === 0) delete copy[id];
      return copy;
    });

  const confirmOrder = () => {
    setOrders((o) => [{ store: store.name, total, kg: materialKg, date: "hoy" }, ...o]);
    setLifetimeKg((k) => Math.round((k + materialKg) * 10) / 10);
    setScreen("tracking");
  };

  const resetOrder = () => {
    setScreen(null);
    setStore(null);
    setCart({});
    setMaterials({});
    setRecyclePct(100);
    setTab("impacto");
  };

  const goToStore = (s) => {
    setStore(s);
    setScreen("store");
  };

  const backToCategories = () => {
    setScreen(null);
    setStore(null);
    setCart({});
  };

  const selectTab = (id) => {
    setTab(id);
    setScreen(null);
    setStore(null);
  };

  return (
    <div className="tuki-root">
      <div className="phone">
        <div className="demo-note">Prototipo demostrativo · TUKI · Ibagué, Tolima</div>
        <div className="content">
          {screen === "tracking" && (
            <TrackingScreen
              rider={rider}
              materialKg={materialKg}
              materialCo2={materialCo2}
              onDone={resetOrder}
            />
          )}

          {screen === "checkout" && (
            <CheckoutScreen
              cartItems={cartItems}
              subtotal={subtotal}
              total={total}
              recyclePct={recyclePct}
              setRecyclePct={setRecyclePct}
              recycleTarget={recycleTarget}
              cashPart={cashPart}
              materials={materials}
              materialValue={materialValue}
              remaining={remaining}
              canConfirm={canConfirm}
              onAddKg={addKg}
              onBack={() => setScreen("store")}
              onConfirm={confirmOrder}
            />
          )}

          {screen === "store" && store && (
            <StoreScreen
              store={store}
              cart={cart}
              subtotal={subtotal}
              onAddItem={addItem}
              onBack={backToCategories}
              onGoToCheckout={() => setScreen("checkout")}
            />
          )}

          {!screen && tab === "inicio" && (
            <HomeTab lifetimeKg={lifetimeKg} onSelectStore={goToStore} />
          )}

          {!screen && tab === "tarifas" && <RatesTab />}

          {!screen && tab === "impacto" && (
            <ImpactTab lifetimeKg={lifetimeKg} orders={orders} />
          )}

          {!screen && tab === "perfil" && <ProfileTab />}
        </div>

        {screen !== "tracking" && screen !== "checkout" && (
          <BottomNav activeTab={!screen ? tab : null} onSelect={selectTab} />
        )}
      </div>
    </div>
  );
}
