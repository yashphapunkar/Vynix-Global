import { Product, FAQItem, Certification } from "./types";

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
