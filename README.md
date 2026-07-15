# TUKI · "Tú reciclas, tú impactas"

Un trueque moderno con sentido ambiental.

TUKI es una plataforma de domicilios donde los pedidos se pagan —total o
parcialmente— con residuos reciclables en lugar de dinero. Nace en Ibagué,
Tolima, con tres objetivos entrelazados:

- **Ambiental**: recolectar, pesar, comercializar y transformar residuos
  (plástico PET, cartón, vidrio, aluminio, papel) a través de la logística
  de cada domicilio, evitando que terminen como basura.
- **Social**: formalizar a la población recicladora y construir una
  operación logística con empoderamiento femenino, contratando mujeres
  madres cabeza de familia como domiciliarias.
- **Económico**: mover esa flota en motos eléctricas provistas por el
  proyecto —cero emisiones— y generar ingresos dignos para las
  domiciliarias mientras los usuarios acceden a domicilios más baratos o
  gratuitos.

Este repositorio contiene el prototipo interactivo de la app de usuario:
un flujo tipo Rappi (categorías → comercio → carrito → checkout →
seguimiento) cuya diferencia central es la **EcoBilletera**, que permite
pagar cada pedido combinando dinero en efectivo y material reciclable
según tarifas por kilogramo.

## Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/) como bundler y servidor de desarrollo
- CSS plano (sin frameworks), diseñado para verse como una app móvil
  (marco de "teléfono" centrado en pantallas anchas)

## Estructura del proyecto

```
src/
  data.js               Tarifas de reciclaje, comercios aliados, domiciliarias
  utils.js              Formateo de moneda (COP)
  styles.css            Estilos globales de la app
  TukiApp.jsx           Componente raíz: estado del pedido y enrutamiento de pantallas
  main.jsx              Punto de entrada de React
  components/
    TukiLogo.jsx         Logotipo SVG de la marca
    BottomNav.jsx         Navegación inferior (Inicio · Tarifas · Impacto · Perfil)
  screens/
    HomeTab.jsx           Inicio: resumen de reciclaje acumulado + categorías
    RatesTab.jsx          Tarifas de reciclaje por material
    ImpactTab.jsx         Impacto acumulado del usuario + historial de pedidos
    ProfileTab.jsx        Perfil del usuario + postulación como domiciliaria
    StoreScreen.jsx        Catálogo de un comercio aliado
    CheckoutScreen.jsx     EcoBilletera: pago mixto dinero + reciclaje
    TrackingScreen.jsx     Seguimiento del domicilio y resumen de impacto
```

## Cómo correr el proyecto

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
```

## Cómo funciona la EcoBilletera

1. El usuario arma su pedido en un comercio aliado (mercado, restaurante,
   farmacia o paquetería).
2. En el checkout, elige con un control deslizante qué porcentaje del
   total paga con reciclaje vs. dinero.
3. Selecciona los materiales y kilogramos que va a entregar; cada
   material tiene una tarifa de referencia por kg (ver `src/data.js`).
4. Cuando el valor del material cubre la parte pactada, puede confirmar
   el pedido.
5. La domiciliaria —una mujer cabeza de familia recicladora
   formalizada, en moto eléctrica— pesa el material con báscula
   certificada al momento de la entrega y valida el pago en la app.
6. El pedido queda registrado en el historial de impacto del usuario
   (kg recuperados, CO₂ evitado).

## Estado del proyecto

Este es un **prototipo funcional de interfaz** pensado para validar el
flujo de producto y la propuesta de valor con usuarios y aliados. No
incluye todavía backend, autenticación, pagos reales ni integración con
báscula/logística — son los siguientes pasos naturales para llevar TUKI
a producción.
