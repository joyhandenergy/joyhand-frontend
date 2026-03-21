// ==============================
// BLOG POSTS DATA
// ==============================

export const blogPosts = [
  {
    id: "1",
    title: "How to Choose the Right Solar Power System for Your Home",
    slug: "choose-right-solar-system",
    excerpt: "Switching to solar is a smart investment. Learn how to choose the right solar power system based on your energy needs and budget.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "5 min read",
    content: [
      "Choosing the right solar system starts with understanding your daily energy consumption. Review your electricity bills to determine your average monthly usage.",
      "Roof size and orientation are key factors. South-facing roofs with minimal shading generate maximum solar output.",
      "Consider whether you want a grid-tied, off-grid, or hybrid solar system. Each setup has different advantages depending on your location.",
      "Work with certified solar installers to ensure proper system sizing, inverter compatibility, and long-term reliability.",
    ],
  },
  {
    id: "2",
    title: "Top Benefits of Installing a Solar Power Station",
    slug: "benefits-of-solar-power-station",
    excerpt: "Solar power stations reduce electricity costs and provide energy independence. Discover the long-term benefits of going solar.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "4 min read",
    content: [
      "Installing a solar power station significantly reduces your monthly electricity bills.",
      "Solar energy is renewable and environmentally friendly, reducing carbon emissions.",
      "Modern solar systems increase property value and improve energy security.",
      "Government incentives and tax benefits can further lower installation costs.",
    ],
  },
  {
    id: "3",
    title: "How Solar Battery Storage Works",
    slug: "how-solar-battery-storage-works",
    excerpt: "Solar batteries store excess energy generated during the day for use at night or during outages. Learn how battery storage systems function.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "6 min read",
    content: [
      "Solar panels generate electricity during daylight hours, often producing more energy than is immediately needed.",
      "A battery storage system captures excess energy and stores it for later use.",
      "During nighttime or power outages, stored energy automatically powers your home.",
      "Advanced battery systems include smart monitoring features for efficient energy management.",
    ],
  },
  {
    id: "4",
    title: "Lithium vs. Lead-Acid Solar Batteries: Which Is Better?",
    slug: "lithium-vs-lead-acid-batteries",
    excerpt: "Choosing the right battery type is crucial. Compare lithium and lead-acid batteries to find the best fit for your solar system.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "7 min read",
    content: [
      "Lithium batteries offer longer lifespan, higher efficiency, and lower maintenance compared to lead-acid batteries.",
      "Lead-acid batteries are more affordable upfront but require regular maintenance.",
      "Lithium batteries are lighter, compact, and ideal for modern home systems.",
      "Your choice depends on budget, energy needs, and long-term performance expectations.",
    ],
  },
  {
    id: "5",
    title: "Understanding Solar Inverters and Their Importance",
    slug: "understanding-solar-inverters",
    excerpt: "Solar inverters are the heart of your solar system. Learn how they convert and manage power efficiently.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "5 min read",
    content: [
      "Solar panels produce direct current (DC) electricity, but homes use alternating current (AC).",
      "Inverters convert DC power into usable AC power for your appliances.",
      "There are string inverters, microinverters, and hybrid inverters — each suited for different system designs.",
      "Choosing a high-quality inverter ensures system efficiency and long-term durability.",
    ],
  },
  {
    id: "6",
    title: "Off-Grid vs. Hybrid Solar Systems Explained",
    slug: "off-grid-vs-hybrid-solar",
    excerpt: "Not sure which solar setup is right for you? Understand the differences between off-grid and hybrid systems.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "6 min read",
    content: [
      "Off-grid systems operate independently from the utility grid and rely entirely on solar panels and battery storage.",
      "Hybrid systems combine solar energy with grid connectivity for maximum reliability.",
      "Hybrid systems allow you to store excess energy while still having grid backup.",
      "Your location, energy needs, and budget determine the best solution.",
    ],
  },
  {
    id: "7",
    title: "How to Maintain Your Solar Power System",
    slug: "maintain-solar-power-system",
    excerpt: "Proper maintenance ensures your solar power system operates efficiently for decades. Learn essential care tips.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "4 min read",
    content: [
      "Clean your solar panels periodically to remove dust and debris that can reduce efficiency.",
      "Monitor your system's performance using smart tracking apps.",
      "Inspect wiring and mounting structures annually for safety and stability.",
      "Schedule professional maintenance checks to maximize system lifespan.",
    ],
  },
  {
    id: "8",
    title: "Why Solar Energy Is the Future of Power Generation",
    slug: "future-of-solar-energy",
    excerpt: "Solar energy is transforming global power systems. Discover why it is becoming the leading renewable energy source worldwide.",
    image: "/images/solarImg/panel.home.jpg",
    readTime: "5 min read",
    content: [
      "Solar technology continues to advance, making systems more affordable and efficient.",
      "Energy storage innovations are solving reliability challenges.",
      "Governments worldwide are investing heavily in renewable infrastructure.",
      "Solar energy reduces dependence on fossil fuels and promotes sustainable development.",
    ],
  },
];

// ==============================
// TRUSTED PARTNERS DATA
// ==============================

export const partners = [
  {
    id: 1,
    name: "PayPal",
    logo: "/images/trusteeImg/alltruck=logo.png",
  },
  {
    id: 2,
    name: "Post Office",
    logo: "/images/trusteeImg/gapasa-logo.png",
  },
  {
    id: 3,
    name: "Monevo",
    logo: "/images/trusteeImg/Interswitch_logo.svg",
  },
  {
    id: 4,
    name: "PayPal",
    logo: "/images/trusteeImg/alltruck=logo.png",
  },
  {
    id: 5,
    name: "Post Office",
    logo: "/images/trusteeImg/gapasa-logo.png",
  },
  {
    id: 6,
    name: "Monevo",
    logo: "/images/trusteeImg/Interswitch_logo.svg",
  },
  
];

// =====================================================
// PRODUCT DATA - JoyHand Energy
// Battery Storage Systems & Inverters
// =====================================================

export const productData = [
  // ===== BATTERIES =====
  {
    id: "bat-001",
    slug: "wall-mount-battery-51-2v-200ah",
    name: "Wall Mount Battery Pack",
    model: "51.2V200AH",
    category: "battery",
    type: "wall-mounted",
    description: "10kW LFP battery pack with WiFi/Bluetooth touchscreen. Perfect for residential and commercial energy storage applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "200Ah",
      energy: "10.24kWh",
      bms: "16S 150A with WiFi/Bluetooth touch screen",
      cellType: "LFP 3.2V200AH",
      dimensions: "720 × 420 × 160mm",
      weight: "76kg",
      grossWeight: "90kg",
      chargeCurrent: "150A",
      dischargeCurrent: "150A",
      workingVoltage: "44.8V ~ 56.8V",
      cycleLife: "6000+ cycles",
      ipRating: "IP20"
    },
    features: [
      "Wall-mounted design for space saving",
      "Smart BMS with touchscreen interface",
      "WiFi & Bluetooth monitoring via mobile app",
      "LFP safe chemistry with long cycle life",
      "Parallel connection capable"
    ],
    applications: [
      "Home energy storage",
      "Solar backup systems",
      "UPS applications",
      "Peak shaving"
    ],
    image: "/images/productImg/battery1.jpg",
    gallery: [
      "/images/products/batteries/wall-mounted-200ah-1.jpg",
      "/images/products/batteries/wall-mounted-200ah-2.jpg"
    ],
    datasheet: "/datasheets/51.2V200AH.pdf",
    certifications: ["CE", "UL", "IEC", "UN38.3"],
    warranty: "5 years",
    inStock: true
  },

  {
    id: "bat-002",
    slug: "wall-mount-battery-51-2v-300ah",
    name: "Wall Mount Battery Pack",
    model: "51.2V300AH",
    category: "battery",
    type: "wall-mounted",
    description: "15kW high capacity LFP battery pack for demanding energy storage applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "300Ah",
      energy: "15.36kWh",
      bms: "16S 200A",
      cellType: "LFP 3.2V300AH",
      dimensions: "800 × 560 × 185mm",
      weight: "112kg",
      grossWeight: "135kg",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      workingVoltage: "44.8V ~ 56.8V",
      cycleLife: "6000+ cycles",
      ipRating: "IP20"
    },
    features: [
      "Wall-mounted design",
      "High capacity BMS for demanding applications",
      "LFP safe chemistry",
      "Long cycle life",
      "Expandable system"
    ],
    applications: [
      "Commercial energy storage",
      "Large solar installations",
      "Industrial backup power"
    ],
    image: "/images/productImg/battery2.jpg",
    gallery: [],
    datasheet: "/datasheets/51.2V300AH.pdf",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true
  },

  {
    id: "bat-003",
    slug: "mobile-battery-pack-51-2v-314ah",
    name: "Mobile Battery Pack",
    model: "51.2V314AH",
    category: "battery",
    type: "mobile",
    description: "16kW wheeled battery pack with LFP 314Ah cells. Portable power for on-the-go applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "314Ah",
      energy: "16.08kWh",
      bms: "16S 200A",
      cellType: "LFP 3.2V314AH",
      dimensions: "680 × 250 × 510mm",
      weight: "116kg",
      grossWeight: "133kg",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      chargeCutoff: "58.4V",
      dischargeCutoff: "40V",
      cycleLife: "6000+ cycles"
    },
    features: [
      "Mobile design with heavy-duty wheels",
      "Easy transportation and positioning",
      "High capacity industrial grade BMS",
      "LFP safe chemistry",
      "Built-in handle for maneuvering"
    ],
    applications: [
      "Mobile power stations",
      "Temporary power for events",
      "Construction sites",
      "Emergency backup"
    ],
    image: "/images/productImg/battery3.jpg",
    gallery: [],
    datasheet: "/datasheets/51.2V314AH.pdf",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true
  },

  {
    id: "bat-004",
    slug: "mobile-battery-pack-51-2v-400ah-ls",
    name: "Mobile Battery Pack",
    model: "51.2V400AH-LS",
    category: "battery",
    type: "mobile",
    description: "20kW wheeled battery pack with smart BMS and WiFi/Bluetooth monitoring.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "400Ah",
      energy: "20.48kWh",
      bms: "16S 200A with WiFi/Bluetooth touch screen",
      cellType: "LFP 3.2V400AH",
      dimensions: "670 × 300 × 800mm",
      weight: "133kg",
      grossWeight: "150kg",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      cycleLife: "6000+ cycles"
    },
    features: [
      "Mobile design with heavy-duty wheels",
      "Smart BMS with touchscreen display",
      "WiFi & Bluetooth monitoring via mobile app",
      "Ultra high capacity",
      "Industrial grade construction"
    ],
    applications: [
      "Large mobile power stations",
      "Event power supply",
      "Remote construction sites",
      "Emergency response"
    ],
    image: "/images/productImg/battery4.jpg",
    gallery: [],
    datasheet: "/datasheets/51.2V400AH-LS.pdf",
    certifications: ["CE"],
    warranty: "3 years",
    inStock: true
  },

  {
    id: "bat-005",
    slug: "s-series-battery-gw-51-2-100-b",
    name: "S-Series Battery",
    model: "GW-51.2/100-B",
    category: "battery",
    type: "rack-mounted",
    description: "10.24kWh LFP battery with integrated LCD screen for real-time monitoring.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "200Ah",
      energy: "10.24kWh",
      bms: "LCD screen display with intelligent BMS",
      cellType: "LFP",
      dimensions: "1020 × 510 × 295mm",
      chargeCurrent: "150A",
      dischargeCurrent: "150A",
      workingVoltage: "44.8V ~ 56.8V",
      ipRating: "IP20",
      cooling: "Natural cooling",
      altitude: "≤4000m",
      temperature: {
        discharge: "-10℃ ~ 55℃",
        charge: "0℃ ~ 45℃",
        storage: "-20℃ ~ 95℃"
      }
    },
    features: [
      "Integrated LCD screen display",
      "Rack mountable design",
      "Natural cooling system",
      "High altitude capable (4000m)",
      "Intelligent BMS"
    ],
    applications: [
      "Server room backup",
      "Telecom applications",
      "Industrial control systems"
    ],
    image: "/images/productImg/s-battery1.png",
    gallery: [],
    datasheet: "/datasheets/GW-51.2-100-B.pdf",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true
  },

  {
    id: "bat-006",
    slug: "s-series-battery-gw-51-2-300-b",
    name: "S-Series Battery",
    model: "GW-51.2/300-B",
    category: "battery",
    type: "rack-mounted",
    description: "15.56kWh high capacity LFP battery with LCD display for professional applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "304Ah",
      energy: "15.565kWh",
      bms: "LCD screen display with intelligent BMS",
      cellType: "LFP",
      dimensions: "1020 × 510 × 295mm",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      workingVoltage: "44.8V ~ 56.8V",
      ipRating: "IP20"
    },
    features: [
      "Integrated LCD screen display",
      "Higher capacity version",
      "Rack mountable",
      "Natural cooling"
    ],
    applications: [
      "Data centers",
      "Telecom infrastructure",
      "Industrial backup"
    ],
    image: "/images/productImg/s-battery2.png",
    gallery: [],
    datasheet: "/datasheets/GW-51.2-300-B.pdf",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true
  },
  
  {
    id: "bat-007",
    slug: "lithium-battery-51-2v-100ah",
    name: "Lithium Battery Pack",
    model: "51.2V100AH",
    category: "battery",
    type: "solar-storage",
    description:
      "Compact 5.12kWh LiFePO4 battery designed for residential and small solar energy storage applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "100Ah",
      energy: "5.12kWh",
      bms: "50A charge / 100A discharge",
      cellType: "LiFePO4",
      chargeCurrent: "50A",
      dischargeCurrent: "100A"
    },
    features: [
      "Compact and lightweight design",
      "Long lifespan LiFePO4 chemistry",
      "Stable performance for solar systems",
      "Integrated BMS protection",
      "Easy installation"
    ],
    applications: [
      "Home solar systems",
      "Small energy storage setups",
      "Backup power",
      "Off-grid solutions"
    ],
    image: "/images/productImg/inverter4.jpg",
    gallery: [],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true
  },

  {
    id: "bat-008",
    slug: "lithium-battery-51-2v-200ah",
    name: "Lithium Battery Pack",
    model: "51.2V200AH",
    category: "battery",
    type: "solar-storage",
    description:
      "Mid-capacity 10.24kWh LiFePO4 battery suitable for residential and commercial solar storage systems.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "200Ah",
      energy: "10.24kWh",
      bms: "100A charge / 200A discharge",
      cellType: "LiFePO4",
      chargeCurrent: "100A",
      dischargeCurrent: "200A"
    },
    features: [
      "High energy density",
      "Reliable LiFePO4 chemistry",
      "Advanced BMS protection",
      "Expandable for larger systems",
      "Long cycle life"
    ],
    applications: [
      "Residential solar storage",
      "Commercial backup systems",
      "Off-grid installations",
      "Energy storage solutions"
    ],
    image: "/images/productImg/inverter5.jpg",
    gallery: [],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true
  },

  {
    id: "bat-009",
    slug: "lithium-battery-51-2v-314ah",
    name: "Lithium Battery Pack",
    model: "51.2V314AH",
    category: "battery",
    type: "solar-storage",
    description:
      "High-capacity 16.08kWh LiFePO4 battery built for demanding solar storage and industrial energy applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "314Ah",
      energy: "16.08kWh",
      bms: "200A charge / 200A discharge",
      cellType: "LiFePO4",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      chargeCutoff: "58.4V",
      dischargeCutoff: "40V"
    },
    features: [
      "High capacity for large systems",
      "Industrial-grade BMS",
      "Safe and stable LiFePO4 chemistry",
      "Long lifecycle performance",
      "Suitable for heavy-duty usage"
    ],
    applications: [
      "Large solar storage systems",
      "Industrial energy storage",
      "Backup power systems",
      "Off-grid power solutions"
    ],
    image: "/images/productImg/inverter6.jpg",
    gallery: [],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true
  },

  // ===== HYBRID INVERTERS =====
  {
    id: "inv-001",
    slug: "hybrid-inverter-hf-6-2kw-48v",
    name: "6.5kW Hybrid Inverter",
    model: "HF-6.2KW-48V",
    category: "inverter",
    type: "hybrid",
    description: "6.2kW high frequency hybrid inverter with 500V MPPT. Perfect for residential solar systems.",
    specifications: {
      power: "6200W",
      dcInput: "48V 135A",
      acInput: "230V 40A",
      acOutput: "230V 27A",
      acChargeCurrent: "80A max",
      maxChargeCurrent: "120A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "6500W",
      topology: "High frequency",
      efficiency: "93%",
      weight: "8.7kg",
      grossWeight: "9.55kg",
      dimensions: "422 × 297 × 108mm"
    },
    features: [
      "UPS function <10ms transfer time",
      "Automatic power transfer between grid, solar and battery",
      "MPPT 500V/120A",
      "120A AC charger",
      "Supports up to 9kW PV input",
      "LCD display for monitoring"
    ],
    applications: [
      "Residential solar systems",
      "Home backup power",
      "Self-consumption optimization"
    ],
    image: "/images/productImg/inverter1.jpg",
    gallery: [],
    datasheet: "/datasheets/HF-6.2KW-48V.pdf",
    certifications: ["CE", "IEC 62109"],
    warranty: "2 years",
    inStock: true
  },

  {
    id: "inv-002",
    slug: "hybrid-inverter-hf-12kw-48v",
    name: "12kW Hybrid Inverter",
    model: "HF-12KW-48V",
    category: "inverter",
    type: "hybrid",
    description: "12kW high frequency hybrid inverter with overload bypass for commercial applications.",
    specifications: {
      power: "12000W",
      dcInput: "48V 220A",
      acInput: "230V 60A",
      acOutput: "230V 47.8A",
      acChargeCurrent: "160A max",
      maxChargeCurrent: "160A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "15000W",
      topology: "High frequency",
      efficiency: "94%",
      weight: "14.55kg",
      grossWeight: "16.3kg",
      dimensions: "520 × 340 × 145mm"
    },
    features: [
      "Overload bypass function",
      "Automatic grid transfer",
      "MPPT 500V/160A",
      "160A AC charger",
      "Supports up to 15kW PV input",
      "Parallel operation capable"
    ],
    applications: [
      "Commercial solar systems",
      "Large home installations",
      "Small business backup"
    ],
    image: "/images/productImg/inverter2.jpg",
    gallery: [],
    datasheet: "/datasheets/HF-12KW-48V.pdf",
    certifications: ["CE", "IEC 62109"],
    warranty: "2 years",
    inStock: true
  },

  {
    id: "inv-003",
    slug: "hybrid-inverter-hf-12kw-48v-ip54",
    name: "12kW Hybrid Inverter IP54",
    model: "HF-12KW-48V-IP54",
    category: "inverter",
    type: "hybrid",
    description: "12kW hybrid inverter with IP54 weather protection and parallel capability for up to 12 units.",
    specifications: {
      power: "12000W",
      dcInput: "48V",
      acChargeCurrent: "210A",
      maxChargeCurrent: "210A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "16000W",
      ipRating: "IP54",
      parallelSupport: "Up to 12 units",
      efficiency: "94%"
    },
    features: [
      "IP54 weather protection for outdoor installation",
      "Parallel up to 12 units for scalability",
      "Overload bypass",
      "Automatic power transfer",
      "Supports up to 16kW PV input"
    ],
    applications: [
      "Outdoor solar installations",
      "Large commercial systems",
      "Industrial applications"
    ],
    image: "/images/productImg/inverter3.jpg",
    gallery: [],
    datasheet: "/datasheets/HF-12KW-48V-IP54.pdf",
    certifications: ["CE", "IP54", "IEC 62109"],
    warranty: "2 years",
    inStock: true
  },

  // ===== WALL MOUNTED INVERTERS =====
  {
    id: "inv-004",
    slug: "wall-mounted-inverter-em6200-48l",
    name: "Wall Mounted Inverter",
    model: "EM6200-48L",
    category: "inverter",
    type: "wall-mounted",
    description: "6200W wall mounted inverter for space-saving installations.",
    specifications: {
      power: "6200W",
      dcInput: "48V 135A",
      acInput: "230V 40A",
      acOutput: "230V 27A",
      acChargeCurrent: "80A max (default 30A)",
      maxChargeCurrent: "120A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "6500W",
      weight: "8.7kg",
      grossWeight: "9.55kg",
      dimensions: "422 × 297 × 108mm"
    },
    features: [
      "Wall mounted design saves floor space",
      "Single unit operation",
      "LCD display",
      "Multiple working modes"
    ],
    applications: [
      "Residential installations",
      "Space-constrained locations"
    ],
    image: "/images/productImg/battery5.jpg",
    gallery: [],
    datasheet: "/datasheets/EM6200-48L.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true
  },

  {
    id: "inv-005",
    slug: "wall-mounted-inverter-m6200-48pl",
    name: "Wall Mounted Inverter",
    model: "M6200-48PL",
    category: "inverter",
    type: "wall-mounted",
    description: "6200W wall mounted inverter with parallel capability for scalable power.",
    specifications: {
      power: "6200W",
      dcInput: "48V 135A",
      acInput: "230V 40A",
      acOutput: "230V 27A",
      acChargeCurrent: "80A max (default 30A)",
      maxChargeCurrent: "120A",
      mpptVoltage: "60V ~ 430V",
      maxPvPower: "6500W",
      weight: "9.7kg",
      grossWeight: "10.6kg",
      dimensions: "442 × 307 × 118mm"
    },
    features: [
      "Wall mounted design",
      "Parallel operation capable",
      "Expandable power",
      "LCD display"
    ],
    applications: [
      "Scalable residential systems",
      "Growing energy needs"
    ],
    image: "/images/productImg/battery6.jpg",
    gallery: [],
    datasheet: "/datasheets/M6200-48PL.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true
  },

  {
    id: "inv-006",
    slug: "wall-mounted-inverter-em11000-48l",
    name: "Wall Mounted Inverter",
    model: "EM11000-48L",
    category: "inverter",
    type: "wall-mounted",
    description: "11000W high power wall mounted inverter with dual MPPT for maximum energy harvest.",
    specifications: {
      power: "11000W",
      dcInput: "48V 220A",
      acInput: "230V 60A",
      acOutput: "230V 47.8A",
      acChargeCurrent: "120A max (default 60A)",
      maxChargeCurrent: "160A",
      mpptVoltage: "60V ~ 430V",
      maxPvPower: "11000W (5500W + 5500W)",
      weight: "14.55kg",
      grossWeight: "16.3kg",
      dimensions: "520 × 340 × 145mm"
    },
    features: [
      "Wall mounted high power design",
      "Dual MPPT for complex solar arrays",
      "High power output",
      "Advanced LCD display"
    ],
    applications: [
      "Large residential systems",
      "Small commercial installations"
    ],
    image: "/images/productImg/battery7.jpg",
    gallery: [],
    datasheet: "/datasheets/EM11000-48L.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true
  },

  {
    id: "inv-007",
    slug: "wall-mounted-inverter-em11000-48l-p",
    name: "Wall Mounted Inverter",
    model: "EM11000-48L-P",
    category: "inverter",
    type: "wall-mounted",
    description: "11000W wall mounted inverter with parallel capability and dual MPPT.",
    specifications: {
      power: "11000W",
      dcInput: "48V 220A",
      acInput: "230V 60A",
      acOutput: "230V 47.8A",
      acChargeCurrent: "120A max (default 60A)",
      maxChargeCurrent: "160A",
      mpptVoltage: "60V ~ 430V",
      maxPvPower: "11000W (5500W + 5500W)"
    },
    features: [
      "Wall mounted design",
      "Parallel operation capable",
      "Dual MPPT",
      "High power output"
    ],
    applications: [
      "Scalable commercial systems",
      "High demand installations"
    ],
    image: "/images/productImg/battery8.jpg",
    gallery: [],
    datasheet: "/datasheets/EM11000-48L-P.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true
  }
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

/**
 * Get products by category (e.g., 'battery' or 'inverter')
 */
export const getProductsByCategory = (category) => {
  return productData.filter((product) => product.category === category);
};

/**
 * Get product by unique slug
 */
export const getProductBySlug = (slug) => {
  return productData.find((product) => product.slug === slug);
};

/**
 * Get related products from same category
 */
export const getRelatedProducts = (product, limit = 3) => {
  if (!product) return [];
  return productData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

/**
 * Get products by specific type
 */
export const getProductsByType = (type) => {
  return productData.filter((product) => product.type === type);
};

/**
 * Get all unique categories
 */
export const getCategories = () => {
  return [...new Set(productData.map((product) => product.category))];
};

/**
 * Get all unique types
 */
export const getTypes = () => {
  return [...new Set(productData.map((product) => product.type))];
};