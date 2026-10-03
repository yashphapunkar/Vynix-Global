import { Product, FAQItem, Certification } from "./types";

// "/Vynix-Global/" in production (GitHub Pages), "/" in local dev.
// Requires `base: "/Vynix-Global/"` in vite.config.ts.
const BASE = import.meta.env.BASE_URL;

export const PRODUCTS: Product[] = [
  {
    id: "auto-engine-valves",
    name: "Precision Engine Valves",
    category: "automotive",
    description: "High-temperature resistant, high-alloy steel engine intake and exhaust valves built to IATF 16949 standards.",
    longDescription: "Our engine valves are forged from premium martensitic and austenitic steels, engineered to withstand extreme pressures and thermal conditions. Sourced directly from the best OEMs and major tier-1 manufacturers across India, these components are trusted by leading global OEMs for diesel and gasoline engines.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    hsCode: "8409.91.11",
    moq: "10,000 Units",
    specifications: {
      "Material": "21-4N (Exhaust) / EN18D (Intake)",
      "Surface Treatment": "Chrome Plated, Nitrided, Stellite Tipped",
      "Compliance": "IATF 16949:2016, ISO 9001:2015",
      "Dimensional Tolerance": "Within ± 0.005 mm",
      "Application": "Commercial Vehicles, Passenger Cars, Heavy Equipment"
    },
    packaging: ["VCI Anti-Corrosion Bags", "Custom Box Trays", "Seaworthy Wooden Pallets"]
  },
  {
    id: "auto-forged-gears",
    name: "Transmission & Differential Gears",
    category: "automotive",
    description: "Precision-ground spur, helical, and bevel gears designed for robust power transmission and minimal backlash.",
    longDescription: "Engineered from case-hardened structural steel, our transmission and differential gears are CNC machined, heat-treated via gas carburizing, and shot-peened for maximum fatigue strength. Sourced directly from the best automotive OEMs across India, these gears are perfect for heavy-duty commercial and off-highway applications.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
    hsCode: "8708.40.00",
    moq: "1,500 Units",
    specifications: {
      "Material": "20MnCr5 / SAE 8620 / 17CrNiMo6 Steel",
      "Gear Quality Grade": "DIN 5 / AGMA 11",
      "Heat Treatment": "Case Hardened (HRC 58-62)",
      "Process": "Precision Forging, Hobbing, Grinding, Shot-Peening",
      "Testing": "100% Ultrasonic Testing, Coordinate Measuring Machine (CMM)"
    },
    packaging: ["Oil-dipped Protection", "Individual Bubble Envelopes", "Heavy-Duty Euro Crates"]
  },
  {
    id: "auto-high-tensile-fasteners",
    name: "High-Tensile Automotive Fasteners",
    category: "automotive",
    description: "Grade 8.8, 10.9, and 12.9 specialized bolts, studs, and nuts engineered for critical high-vibration automotive joints.",
    longDescription: "Manufactured using cold-forging technology from high-grade alloy steel, our fasteners are heat-treated to meet the highest tensile and proof load requirements. Sourced from the best OEMs across India, these fasteners offer outstanding corrosion resistance and reliable clamp load retention for engine, chassis, and suspension assembly.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    hsCode: "7318.15.00",
    moq: "25,000 Units",
    specifications: {
      "Material": "Medium Carbon Steel / Alloy Steel (SCM435 / 10B21)",
      "Grade": "Class 8.8, 10.9, 12.9",
      "Surface Finish": "Zinc Flake, Phosphate Coated, Hot Dip Galvanized",
      "Standards": "ISO 898-1, DIN 931/933/912",
      "Thread Precision": "ISO Metric 6g / 6H"
    },
    packaging: ["Corrosion-preventive oil wrap", "Custom inner cartons", "Seaworthy wooden pallets"]
  },
  {
    id: "auto-fuel-nozzles",
    name: "Specialized Fuel Injection Components",
    category: "automotive",
    description: "High-pressure fuel injection nozzles and valves engineered for precise diesel fuel atomization.",
    longDescription: "Our common rail fuel injection components are precision-engineered to operate at pressures exceeding 2,000 bar. Sourced from the best OEMs across India using cutting-edge micro-drilling and high-flow testing, these fuel system parts ensure optimal fuel economy and strict emission compliance.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    hsCode: "8409.99.11",
    moq: "2,000 Units",
    specifications: {
      "Precision Sizing": "Hole diameters down to 0.1 mm",
      "Testing Pressure": "Up to 2,500 bar functional testing",
      "Material": "High-durability tool steel with special DLC coatings",
      "Application": "Common Rail Diesel Engines (CRDI)",
      "Coating": "Diamond-Like Carbon (DLC) for reduced friction"
    },
    packaging: ["Sealed anti-static plastic packs", "Individual protective capsules", "Reinforced box crates"]
  },
  {
    id: "coffee-arabica-aaa",
    name: "Arabica Plantation AAA",
    category: "coffee",
    description: "Chikmagalur shade-grown washed Arabica beans with clean acidity, medium body, and notes of caramel and cocoa.",
    longDescription: "Sourced from historic single estates at altitudes of 1,100 to 1,400 meters in India's Bababudangiri region (the cradle of Indian coffee). These AAA grade beans are carefully wet-processed, sun-dried, and screen-sorted in modern dry mills in India to guarantee pristine batch consistency and exceptional quality.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800",
    hsCode: "0901.11.19",
    moq: "19 Metric Tons (1 x 20ft FCL)",
    specifications: {
      "Type": "Washed Arabica Plantation (AAA Grade)",
      "Screen Size": "19+ (Retention > 90%)",
      "Moisture Content": "11.5% - 12.5% max",
      "Black & Broken Beans": "Max 1.5%",
      "Tasting Profile": "Caramelized sweetness, citrus undertones, chocolate finish"
    },
    packaging: ["60kg Jute Sacks with GrainPro Liners", "Custom 1 Metric Ton Big Bags"]
  },
  {
    id: "coffee-mysore-nuggets",
    name: "Mysore Nuggets Extra Bold (MNEB)",
    category: "coffee",
    description: "Premium washed specialty Arabica representing the absolute pinnacle of Indian coffee grading, presenting full body.",
    longDescription: "Mysore Nuggets Extra Bold is the crown jewel of Indian coffees. Prepared from washed Arabica, these hand-sorted extra-bold beans feature a uniform bluish-green shade. Sourced from premier single estates across India, they feature soft spices and a striking royal aroma. Perfect for single-origin roasting and luxury blends.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    hsCode: "0901.11.19",
    moq: "10 Metric Tons",
    specifications: {
      "Type": "Specialty Washed Arabica MNEB",
      "Screen Size": "20+ (Retention > 95%)",
      "Moisture Content": "11.0% - 12.0%",
      "Origin": "Baba Budangiri & Coorg Hills, India",
      "Tasting Profile": "Full body, complex spices, delicate chocolatey finish, zero defects"
    },
    packaging: ["Export Grade Jute Bags with Hermetic Internal Liners", "Vacuum Pack Cartons"]
  },
  {
    id: "coffee-kaapi-royale",
    name: "Robusta Kaapi Royale",
    category: "coffee",
    description: "The absolute finest grade of washed Indian Robusta, delivering heavy body, mellow wooden-spicy tones, and rich crema.",
    longDescription: "Kaapi Royale represents the premium selection of double-washed Robusta beans, completely free from triage or defects. Cultivated under multi-tier shade canopies across premium southern coffee estates, these bold, round beans yield excellent body and soft chocolate notes, making them a world-favorite for espresso blends.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    hsCode: "0901.11.29",
    moq: "19 Metric Tons (1 x 20ft FCL)",
    specifications: {
      "Type": "Specialty Washed Robusta (Kaapi Royale)",
      "Screen Size": "17+ (Retention > 90%)",
      "Moisture Content": "11.5% - 12.5% max",
      "Defects": "Virtually zero (Hand-sorted)",
      "Tasting Profile": "Clean, intense chocolate notes, heavy syrup-like body, toasted hazelnut finish"
    },
    packaging: ["60kg Jute Sacks with Hermetic Liners", "Bulk Big-Bags"]
  },
  {
    id: "coffee-monsooned-malabar",
    name: "Monsooned Malabar AA",
    category: "coffee",
    description: "Unique monsoon-cured beans with exceptionally low acidity, heavy syrupy body, and a musty, spicy profile.",
    longDescription: "Monsooned Malabar AA is a highly celebrated exotic specialty coffee. Green Arabica beans are stored in open-sided warehouses along the Malabar Coast of India during monsoon season, absorbing salt-laden moisture and swelling to double their size. This results in a golden-colored bean with near-zero acidity, heavy body, and intense woody notes.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
    hsCode: "0901.11.19",
    moq: "15 Metric Tons",
    specifications: {
      "Type": "Monsooned Arabica AA",
      "Screen Size": "18+ (Retention > 85%)",
      "Moisture Content": "12.5% - 13.0% max",
      "Color": "Uniform Pale Gold / Straw Color",
      "Tasting Profile": "Zero acidity, earthy mustiness, heavy syrupy body, notes of wood, tobacco, and baking spices"
    },
    packaging: ["60kg high-quality Jute bags", "Reinforced dry container liners"]
  },
  {
    id: "cattle-rice-ddgs",
    name: "Rice DDGS (Distillers Dried Grains)",
    category: "cattle-feed",
    description: "High-protein (42-45% CP) dried grain solubles derived from rice ethanol distillation for dairy cattle and aquafeed.",
    longDescription: "Rice DDGS is a high-density protein and energy feed ingredient produced during bio-ethanol distillation of select rice grains. Rich in essential amino acids, bypass protein, and digestible fiber, it substantially boosts milk yields in dairy cattle and improves growth in livestock.",
    image: `${BASE}images/cattle-feed/rice-ddgs.jpeg`,
    hsCode: "2303.30.00",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "42% - 45% Min",
      "Moisture Content": "Max 10.0%",
      "Crude Fat": "3% - 5% Min",
      "Crude Fiber": "Max 5.0%",
      "Aflatoxin": "Below 20 PPB (EU/US Export Standard)",
      "Form": "Golden Granular Powder"
    },
    packaging: ["50kg PP Bags", "1 MT Jumbo Bags", "Bulk Container Liners"]
  },
  {
    id: "cattle-maize-ddgs",
    name: "Maize / Corn DDGS",
    category: "cattle-feed",
    description: "High-energy corn distillers dried grains (28-30% CP) for enhanced dairy cattle and livestock nutrition.",
    longDescription: "Manufactured from select yellow corn during ethanol production, Maize DDGS delivers an exceptional combination of digestible protein, organic phosphorus, and metabolic energy. It is widely preferred by commercial feed millers and livestock farms for its high palatability.",
    image: `${BASE}images/cattle-feed/maize-ddgs.jpeg`,
    hsCode: "2303.30.00",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "28% - 30% Min",
      "Crude Fat": "6% - 8% Min",
      "Moisture Content": "Max 10.0%",
      "Crude Fiber": "Max 8.0%",
      "Form": "Golden Yellow Coarse Meal"
    },
    packaging: ["50kg PP Bags", "1 MT Jumbo Bags"]
  },
  {
    id: "cattle-dorb",
    name: "De-Oiled Rice Bran (DORB)",
    category: "cattle-feed",
    description: "High-fiber extracted rice bran meal (14-16% CP) used as a core ingredient in cattle feed pellets and daily farm rations.",
    longDescription: "De-Oiled Rice Bran (DORB) is produced by solvent-extracting oil from fresh rice bran. Containing 14-16% crude protein and rich in metabolic energy and insoluble fiber, DORB serves as a dependable, highly digestible raw material for cattle feed manufacturing.",
    image: `${BASE}images/cattle-feed/dorb.jpeg`,
    hsCode: "2306.90.90",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "14% - 16% Min",
      "Oil Content": "Max 1.0%",
      "Moisture Content": "Max 10.0%",
      "Crude Fiber": "12% - 14% Max",
      "Sand & Silica": "Max 2.5%",
      "Form": "Fine Ground Meal"
    },
    packaging: ["50kg Jute / PP Bags", "Bulk Container Liners"]
  },
  {
    id: "cattle-mustard-doc",
    name: "Mustard De-Oiled Meal (Mustard DOC)",
    category: "cattle-feed",
    description: "Nutrient-dense protein meal (36-38% CP) derived from mustard seed extraction to boost butterfat and milk production.",
    longDescription: "Extracted from high-grade mustard seeds, Mustard DOC is an economical, high-protein meal with a rich amino acid profile. It is widely exported across international dairy markets to increase butterfat percentage and daily milk yield in cattle.",
    image: `${BASE}images/cattle-feed/mustard-doc.png`,
    hsCode: "2306.90.11",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "36% - 38% Min",
      "Oil Content": "Max 1.0%",
      "Moisture Content": "Max 10.0%",
      "Crude Fiber": "Max 10.0%",
      "Sand & Silica": "Max 2.0%",
      "Form": "Brown Meal / Cake Flakes"
    },
    packaging: ["50kg PP Bags", "1 MT Jumbo Bags"]
  },
  {
    id: "cattle-soy-doc",
    name: "Non-GMO Soybean Meal (Hi-Pro Soy DOC)",
    category: "cattle-feed",
    description: "Premium 46-48% protein Non-GMO soybean extract meal engineered for maximum digestibility in dairy cattle.",
    longDescription: "Sourced from central India's non-GMO soybean belt, our Soybean Meal is recognized globally for its superior amino acid spectrum, ultra-low moisture, and 100% non-GMO status. It represents the gold standard for high-yielding dairy cattle feeds.",
    image: `${BASE}images/cattle-feed/soy-doc.png`,
    hsCode: "2304.00.90",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "46% - 48% Min",
      "Fat Content": "Max 1.2%",
      "Moisture Content": "Max 11.0%",
      "Crude Fiber": "Max 6.0%",
      "Quality Standard": "100% Non-GMO Certified"
    },
    packaging: ["50kg Poly-lined Bags", "1 MT Jumbo Bags"]
  },
  {
    id: "cattle-corn-gluten-meal",
    name: "Corn Gluten Meal (CGM 60% Protein)",
    category: "cattle-feed",
    description: "Ultra high-protein (60% CP) corn concentrate meal rich in xanthophyll and digestible amino acids.",
    longDescription: "Corn Gluten Meal (CGM) is a golden, dense protein concentrate produced during wet milling of yellow maize. Containing 60% crude protein alongside high metabolizable energy, it is an essential ingredient in specialty cattle rations, poultry feed, and aqua diets.",
    image: `${BASE}images/cattle-feed/corn-gluten-meal.jpeg`,
    hsCode: "2303.10.00",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "60.0% Min",
      "Moisture Content": "Max 10.0%",
      "Crude Fat": "Max 2.5%",
      "Crude Fiber": "Max 2.5%",
      "Form": "Bright Golden Yellow Powder"
    },
    packaging: ["50kg Woven PP Bags", "1 MT Jumbo Bags"]
  },
  {
    id: "cattle-guar-korma",
    name: "Guar Korma Meal (50-55% High Protein)",
    category: "cattle-feed",
    description: "Toasted high-protein guar seed meal (50-55% CP) rich in essential amino acids and methionine for dairy cattle.",
    longDescription: "Guar Korma is a high-protein feed ingredient processed by thermo-mechanically roasting the germ of guar seeds. Completely free from anti-nutritional factors and trypsin inhibitors, Guar Korma provides digestible protein and energy that enhances milk yields and herd health.",
    image: `${BASE}images/cattle-feed/guar-korma.png`,
    hsCode: "2306.90.90",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "50% - 55% Min",
      "Crude Fat": "5% - 7% Min",
      "Moisture Content": "Max 8.0%",
      "Crude Fiber": "Max 6.0%",
      "Digestibility": "Above 90%"
    },
    packaging: ["50kg HDPP Bags", "1 MT Jumbo Bags"]
  },
  {
    id: "cattle-cottonseed-cake",
    name: "Cottonseed Oil Cake / Meal (CSOC)",
    category: "cattle-feed",
    description: "High-energy cottonseed oilcake (24-28% CP, 6-8% Fat) widely preferred in commercial dairy farming to raise milk butterfat.",
    longDescription: "Derived from mechanical extraction of premium Indian cotton seeds, Cottonseed Oil Cake is an energy-dense supplement favored by dairy farmers. Its unique combination of residual natural fats and crude protein directly improves cattle digestion and butterfat yield in milk.",
    image: `${BASE}images/cattle-feed/cottonseed-cake.png`,
    hsCode: "2306.10.20",
    moq: "20 Metric Tons",
    specifications: {
      "Crude Protein": "24% - 28% Min",
      "Oil / Fat Content": "6% - 8% Min",
      "Moisture Content": "Max 10.0%",
      "Crude Fiber": "Max 10.0% - 12.0%",
      "Form": "Solid Pressed Flakes / Cake"
    },
    packaging: ["50kg Jute / PP Bags", "Bulk Container Shipment"]
  },
  {
    id: "cattle-feed-pellets",
    name: "Balanced Dairy Cattle Feed Pellets",
    category: "cattle-feed",
    description: "Steam-pelleted compound cattle feed enriched with essential proteins, minerals, and vitamins for daily milk production.",
    longDescription: "Specially formulated compound cattle feed pellets manufactured to boost daily milk yield and maintain herd health. Formulated from natural grains, oilcakes, and essential mineral mixtures for maximum digestibility and minimal wastage.",
    image: `${BASE}images/cattle-feed/feed-pellets.png`,
    hsCode: "2309.90.10",
    moq: "15 Metric Tons",
    specifications: {
      "Crude Protein": "20% - 22% Min",
      "Crude Fat": "3% - 4% Min",
      "Moisture Content": "Max 10.0%",
      "Form": "Steam Pellets (6mm - 8mm)",
      "Additives": "Vitamins & Chelated Minerals Enriched"
    },
    packaging: ["50kg Woven Bags", "1 MT Jumbo Bags"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "IEC Holder",
    authority: "Directorate General of Foreign Trade (DGFT)",
    description: "Legally registered Import-Export Code (IEC) issued by the Ministry of Commerce & Industry, Government of India, enabling seamless global customs clearance.",
    iconName: "Scale"
  },
  {
    name: "ECGC Covered",
    authority: "Export Credit Guarantee Corporation of India",
    description: "Backed and insured by the ECGC (Govt. of India enterprise). This covers our export credit risks, protecting our buyers and guaranteeing payment safety and absolute trading security on all high-volume commercial contracts.",
    iconName: "ShieldCheck"
  },
  {
    name: "EPC Registered",
    authority: "Export Promotion Councils of India",
    description: "Registered under relevant Export Promotion Councils (EPC) under the Ministry of Commerce & Industry, certifying our compliant status and direct support channels for both engineering and agricultural trade segments.",
    iconName: "Award"
  },
  {
    name: "GST Registered",
    authority: "Department of Revenue, Ministry of Finance",
    description: "Officially certified under Goods and Services Tax (GST) regulations, ensuring standard tax compliance and transparent billing for all international transactions.",
    iconName: "ShieldCheck"
  },
  {
    name: "MSME Certified",
    authority: "Ministry of Micro, Small & Medium Enterprises",
    description: "Registered MSME enterprise under the Government of India, certifying our robust operating compliance and standard trade reliability.",
    iconName: "Award"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your typical lead time from order to port delivery?",
    answer: "For automotive parts and premium coffee, typical production and dispatch to major Indian ports takes 4 to 6 weeks depending on custom configurations and harvest seasonality. Sourcing from the best OEMs and estates across India, we arrange efficient rail and road corridors to secure swift transit.",
    category: "shipping"
  },
  {
    question: "Do you offer customized packaging and marking options?",
    answer: "Yes. All our products are packed to international export standards. We offer private labelling, customized VCI anti-corrosion packaging for metal products, and custom marking on jute bags (with GrainPro/hermetic liners) for coffee batches.",
    category: "general"
  },
  {
    question: "Which Indian ports do you primarily use for shipping?",
    answer: "Most of our consolidated shipments are dispatched from major Inland Container Depots (ICD) situated across active trade corridors in India, and then transported via rail directly to JNPT / Nhava Sheva Port (Mumbai) or Mundra Port (Gujarat) for sea carriage.",
    category: "shipping"
  },
  {
    question: "What are your payment terms for new international clients?",
    answer: "Our standard trading terms are 100% Irrevocable Letter of Credit (L/C) at sight, or 30% advance Telegraphic Transfer (T/T) and the remaining 70% against Scanned Bill of Lading (B/L) and shipping documents.",
    category: "compliance"
  },
  {
    question: "Do you supply pre-shipment inspection certificates?",
    answer: "Absolutely. We provide Certificate of Origin, Phytosanitary certificates for coffee, and material test reports (MTRs) for auto parts. We also welcome third-party pre-shipment inspections by SGS, Bureau Veritas, or Intertek.",
    category: "compliance"
  }
];

export const TRADE_STATS = [
  { label: "Total Shipments Delivered", value: "1,200+" },
  { label: "On-Time Dispatch Rate", value: "99.4%" },
  { label: "Quality Acceptance Rate", value: "99.9%" }
];