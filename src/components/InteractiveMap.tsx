import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Clock, MapPin, Anchor, ArrowRight } from "lucide-react";

interface TradeRoute {
  id: string;
  name: string;
  coords: { x: number; y: number }; // SVG layout coordinates
  transitTime: string;
  routeDetails: string;
  primaryExports: string[];
  carriageType: string;
}

export default function InteractiveMap() {
  const [selectedRoute, setSelectedRoute] = useState<string>("europe");

  // Center hub is India (approx x: 500, y: 220 in our 800x400 map space)
  const hubCoords = { x: 480, y: 220 };

  const routes: TradeRoute[] = [
    {
      id: "europe",
      name: "Rotterdam / Hamburg Gateway (Western Europe)",
      coords: { x: 260, y: 130 },
      transitTime: "22 - 25 Days",
      routeDetails: "Rail corridor from regional dry ports across India to JNPT Mumbai, followed by direct container vessel sailings via Suez Canal to Northern Europe hubs.",
      primaryExports: ["Precision Engine Valves", "Transmission Gears", "Arabica Plantation AAA"],
      carriageType: "Dry Van FCL / Temperature Controlled Reefer"
    },
    {
      id: "usa",
      name: "Port of New York / Houston (North America)",
      coords: { x: 120, y: 140 },
      transitTime: "28 - 32 Days",
      routeDetails: "Pre-cleared at regional dry ports in India, routed via rail to Mundra Port, then ocean transit across Atlantic shipping lines.",
      primaryExports: ["Mysore Nuggets Coffee", "High-Capacity Roller Bearings", "OEM Castings"],
      carriageType: "Standard 20ft/40ft Dry Freight Container"
    },
    {
      id: "dubai",
      name: "Jebel Ali Port (Middle East Hub)",
      coords: { x: 380, y: 200 },
      transitTime: "7 - 9 Days",
      routeDetails: "Express direct feeder services from Mundra Port (Gujarat) delivering ultra-rapid turnarounds for Arabian Gulf procurement.",
      primaryExports: ["Heavy-Duty Gate Valves", "Auto Gears", "Agro Commodities"],
      carriageType: "LCL Consolidation / Open Top Flat Racks"
    },
    {
      id: "asia",
      name: "Port of Singapore / Tokyo (East Asia)",
      coords: { x: 620, y: 250 },
      transitTime: "12 - 15 Days",
      routeDetails: "Direct shipping lines originating from Chennai Port or routed via Colombo transshipment terminals.",
      primaryExports: ["Arabica AAA Coffee", "Precision Bearings", "Industrial Valves"],
      carriageType: "20ft General Purpose FCL"
    }
  ];

  const activeRouteData = routes.find((r) => r.id === selectedRoute) || routes[0];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,139,142,0.08),transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-7">
            <span className="text-teal-400 font-extrabold tracking-widest text-xs uppercase block mb-3 font-mono">
              Global Supply Integrity
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight">
              Interactive Trading Corridors
            </h2>
            <p className="text-slate-400 font-light text-sm sm:text-base mt-4 max-w-xl">
              With a robust All-India logistical footprint, we coordinate seamless multi-modal logistics linking key global shipping lanes to secure swift, compliant cargo delivery.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end gap-2 text-xs font-mono text-slate-500">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse mt-1.5" />
            <span>Operations Network: All India Coverage</span>
          </div>
        </div>

        {/* Map and Details Flex Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Column (Interactive List) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-900 rounded-2xl p-6 sm:p-8 relative">
            <div className="text-slate-500 text-[10px] uppercase font-mono tracking-widest mb-6">
              Active Trade Corridors
            </div>

            {/* Premium Route Selector List */}
            <div className="relative w-full space-y-3" id="interactive-map-canvas">
              {routes.map((route) => {
                const isActive = route.id === selectedRoute;
                return (
                  <button
                    key={route.id}
                    onClick={() => setSelectedRoute(route.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                      isActive
                        ? "bg-teal-500/10 border-teal-500/40 shadow-lg shadow-teal-500/5 text-white"
                        : "bg-slate-900/50 border-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive indicator dot/pulse */}
                      <div className="relative flex h-3 w-3 shrink-0">
                        {isActive && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        )}
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? "bg-teal-400" : "bg-slate-700"}`}></span>
                      </div>
                      
                      <div>
                        <h4 className="font-sans font-medium text-sm sm:text-base tracking-wide">
                          {route.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                          Transit Method: {route.carriageType.split(" / ")[0]}
                        </p>
                      </div>
                    </div>

                    {/* Transit time badge */}
                    <div className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg shrink-0 ${
                      isActive
                        ? "bg-teal-500/20 text-teal-300"
                        : "bg-slate-950/60 text-slate-400 border border-slate-800"
                    }`}>
                      {route.transitTime}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 bg-slate-900/20 border border-slate-900 rounded-2xl p-8 space-y-6" id="trade-route-details">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-widest">
                  Active Trade Corridor: All World
                </span>
                <h3 className="text-xl sm:text-2xl font-serif mt-1 tracking-wide">
                  {activeRouteData.name}
                </h3>
              </div>
              <div className="bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-[11px] font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 shrink-0">
                <Clock className="h-3.5 w-3.5" />
                <span>{activeRouteData.transitTime}</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Transport logistics */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Compass className="h-4 w-4 text-teal-500" />
                  <span>Logistics Pipeline</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {activeRouteData.routeDetails}
                </p>
              </div>

              {/* Carriage specifications */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Anchor className="h-4 w-4 text-teal-500" />
                  <span>Approved Freight Style</span>
                </h4>
                <span className="inline-block bg-slate-900 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-medium">
                  {activeRouteData.carriageType}
                </span>
              </div>

              {/* Routine commodities exported */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Routing Cargo Batches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeRouteData.primaryExports.map((exp, idx) => (
                    <span
                      key={idx}
                      className="bg-teal-500/5 text-teal-300 border border-teal-500/10 px-3 py-1 rounded-full text-[11px] font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action suggestion */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 flex items-center justify-between text-xs mt-6">
              <span className="text-slate-400">Inquiring about this route?</span>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-teal-400 font-bold hover:text-teal-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Ask Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
